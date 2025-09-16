using System.Reflection;

namespace backend.Services
{
    public class SQLServices
    {
        public string SQLWhereFilterString(object model)
        {
            string filterString = "WHERE ";
            int NpropriedadesComFiltro = 0;


            foreach (PropertyInfo property in model.GetType().GetProperties())
            {
                if (property.GetValue(model, null) is not null)
                {
                    if(property.PropertyType == typeof(int) || property.PropertyType == typeof(int?))
                    {
                        if((int)property.GetValue(model, null) != 0)
                        {
                            NpropriedadesComFiltro++;
                        }
                    }
                    else
                    {
                        NpropriedadesComFiltro++;
                    }
                    
                }

            }


            if(NpropriedadesComFiltro > 0)
            {
                foreach (PropertyInfo property in model.GetType().GetProperties())
                {
                    if (property.GetValue(model, null) is not null)
                    {
                        if (property.PropertyType.FullName == "System.String")
                        {
                            filterString += property.Name + " LIKE '%" + property.GetValue(model, null) + "%' ";
                            if (NpropriedadesComFiltro - 1 >= 1)
                            {
                                filterString += " AND ";
                                NpropriedadesComFiltro--;
                            }
                        }
                        else
                        {
                            if (property.PropertyType == typeof(bool?) || property.PropertyType == typeof(bool))
                            {
                                bool value = (bool)property.GetValue(model);

                                filterString += property.Name + " = " + (value ? '1' : '0') + "";
                                if (NpropriedadesComFiltro - 1 >= 1)
                                {
                                    filterString += " AND ";
                                    NpropriedadesComFiltro--;
                                }
                            }
                            else
                            {
                                if (property.PropertyType == typeof(int) || property.PropertyType == typeof(int?))
                                {
                                    if((int)property.GetValue(model,null) > 0)
                                    {
                                        filterString += property.Name + " = " + property.GetValue(model, null) + "";
                                        if (NpropriedadesComFiltro - 1 >= 1)
                                        {
                                            filterString += " AND ";
                                            NpropriedadesComFiltro--;
                                        }
                                    }

                                }
                                else
                                {
                                    filterString += property.Name + " = " + property.GetValue(model, null) + "";
                                    if (NpropriedadesComFiltro - 1 >= 1)
                                    {
                                        filterString += " AND ";
                                        NpropriedadesComFiltro--;
                                    }
                                }

                            }
                        }

                    }

                }
            }
            
            return filterString == "WHERE " ? "" : filterString;
        }
        public string SQLWhereFilterStringDateBatween(string ColumnName, string InitialDate, string FinalDate, string SQLCommand)
        {
            if (SQLCommand.Contains("WHERE"))
            {
                return $"{SQLCommand} AND {ColumnName} BETWEEN '{InitialDate}' AND '{FinalDate}'";
            }
            else
            {
                return $"{SQLCommand} WHERE {ColumnName} BETWEEN '{InitialDate}' AND '{FinalDate}'";
            }
            
            
        }
    }
}
