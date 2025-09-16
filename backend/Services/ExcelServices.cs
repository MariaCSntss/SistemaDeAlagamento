using Azure;
using backend.Models;
using ClosedXML.Excel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.OpenApi.Any;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Reflection;


namespace backend.Services
{
    public class ExcelServices : ControllerBase
    {
        public FileContentResult getExcelFromModel(ArrayList list,string nomeArquivo)
        {
            using (var workbook = new XLWorkbook())
            {
                int rowIndex = 0;
                int columnIndex = 0;
                var worksheet = workbook.Worksheets.Add(list[0].GetType().Name);

                foreach (PropertyInfo prop in list[0].GetType().GetProperties())
                {
                    worksheet.Cell(1, columnIndex+1).Value = prop.Name;
                    foreach (var item in list)
                    {
                        if(prop.GetValue(item, null) == null)
                        {
                            worksheet.Cell(rowIndex + 2, columnIndex + 1).Value = "";
                        }
                        else
                        {
                            if (prop.PropertyType == typeof(byte) || prop.PropertyType == typeof(byte?))
                            {
                                worksheet.Cell(rowIndex + 2, columnIndex + 1).Value = (byte)prop.GetValue(item, null);
                            }
                            if (prop.PropertyType == typeof(int) || prop.PropertyType == typeof(int?))
                            {
                                worksheet.Cell(rowIndex + 2, columnIndex + 1).Value = (int)prop.GetValue(item, null);
                            }
                            if (prop.PropertyType == typeof(double) || prop.PropertyType == typeof(double?))
                            {
                                worksheet.Cell(rowIndex + 2, columnIndex + 1).Value = (double)prop.GetValue(item, null);
                            }
                            if (prop.PropertyType == typeof(float) || prop.PropertyType == typeof(float?))
                            {
                                worksheet.Cell(rowIndex + 2, columnIndex + 1).Value = (float)prop.GetValue(item, null);
                            }
                            if (prop.PropertyType == typeof(string))
                            {
                                worksheet.Cell(rowIndex + 2, columnIndex + 1).Value = prop.GetValue(item, null).ToString();
                            }
                            if (prop.PropertyType == typeof(bool) || prop.PropertyType == typeof(bool?))
                            {
                                worksheet.Cell(rowIndex + 2, columnIndex + 1).Value = (bool)prop.GetValue(item, null);
                            }
                            if (prop.PropertyType == typeof(DateTime))
                            {
                                worksheet.Cell(rowIndex + 2, columnIndex + 1).Value = (DateTime)prop.GetValue(item, null);
                            }
                        }
                        
                        rowIndex++;
                    }
                    rowIndex = 0;
                    columnIndex++;

                }
                using (MemoryStream memory = new MemoryStream())
                {
                    workbook.SaveAs(memory);
                    return File(memory.ToArray(), "application/vnd.openxmlformats-officedocument.spreadsheet.sheet", $"{nomeArquivo}.xlsx");
                }
            }
        }

    }
}
