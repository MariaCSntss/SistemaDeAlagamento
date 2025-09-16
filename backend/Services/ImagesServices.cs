using System.IO;

namespace backend.Services
{
    public class ImagesServices
    {
        public void saveImageInFolder(IFormFile file, int modelID, string modelName)
        {
            System.IO.Directory.CreateDirectory($"./Assets/Images/{modelName}/{modelID}");

            string imagePath = this.getImagePath(modelID, modelName, file.FileName);

            if (System.IO.File.Exists(imagePath)) System.IO.File.Delete(imagePath);

            using (FileStream memory = System.IO.File.Create(imagePath))
            {
                file.CopyTo(memory);
            }
        }
        public string getImagePath(int modelID, string modelName, string fileName)
        {
            return $"./Assets/Images/{modelName}/{modelID}/{fileName}";
        }


    }
}
