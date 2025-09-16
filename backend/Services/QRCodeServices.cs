using DocumentFormat.OpenXml.Drawing;
using DocumentFormat.OpenXml.InkML;
using Microsoft.AspNetCore.Mvc;
using QRCoder;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;


namespace backend.Services
{
    public class QRCodeServices : ControllerBase
    {
        CriptografiaService CriptografiaService = new CriptografiaService();
        public byte[] GenerateQRCodeWithTextAsBytes(string conteudo, string descricao, string logoRelativePath)
        {
            string qrContent = CriptografiaService.Encriptar(conteudo);

            using (QRCodeGenerator qrGenerator = new QRCodeGenerator())
            using (QRCodeData qrCodeData = qrGenerator.CreateQrCode(qrContent, QRCodeGenerator.ECCLevel.Q))
            {
                var pngQrCode = new PngByteQRCode(qrCodeData);
                byte[] qrCodeAsPng = pngQrCode.GetGraphic(20);

                using (var ms = new MemoryStream(qrCodeAsPng))
                using (var qrCodeImage = new System.Drawing.Bitmap(ms))
                {
                    int textHeight = 80;
                    int newWidth = qrCodeImage.Width;
                    int newHeight = qrCodeImage.Height + textHeight;

                    using (var combinedImage = new System.Drawing.Bitmap(newWidth, newHeight))
                    using (var g = System.Drawing.Graphics.FromImage(combinedImage))
                    {
                        g.Clear(System.Drawing.Color.White);

                        // Desenha QR Code no topo
                        g.DrawImage(qrCodeImage, new System.Drawing.Point(0, 0));

                        // Inserir logo no centro com fundo branco circular
                        if (System.IO.File.Exists(logoRelativePath))
                        {
                            using (var logo = new System.Drawing.Bitmap(logoRelativePath))
                            {
                                int logoMaxWidth = qrCodeImage.Width / 5;
                                int logoMaxHeight = qrCodeImage.Height / 5;

                                int logoWidth, logoHeight;
                                if (logo.Width > logo.Height)
                                {
                                    logoWidth = logoMaxWidth;
                                    logoHeight = (logo.Height * logoMaxWidth) / logo.Width;
                                }
                                else
                                {
                                    logoHeight = logoMaxHeight;
                                    logoWidth = (logo.Width * logoMaxHeight) / logo.Height;
                                }

                                int logoPosX = (qrCodeImage.Width - logoWidth) / 2;
                                int logoPosY = (qrCodeImage.Height - logoHeight) / 2;

                                // Desenha círculo branco atrás da logo
                                int padding = 2;
                                int circleDiameter = Math.Max(logoWidth, logoHeight) + padding * 2;
                                int circlePosX = (qrCodeImage.Width - circleDiameter) / 2;
                                int circlePosY = (qrCodeImage.Height - circleDiameter) / 2;

                                using (var whiteBrush = new System.Drawing.SolidBrush(System.Drawing.Color.White))
                                {
                                    g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;
                                    g.FillEllipse(whiteBrush, circlePosX, circlePosY, circleDiameter, circleDiameter);
                                }

                                // Desenha a logo sobre o círculo branco
                                g.DrawImage(logo, new System.Drawing.Rectangle(logoPosX, logoPosY, logoWidth, logoHeight));
                            }
                        }

                        // Desenha retângulo preto na área de texto
                        System.Drawing.Rectangle textRect = new System.Drawing.Rectangle(0, qrCodeImage.Height, newWidth, textHeight);
                        using (var blackBrush = new System.Drawing.SolidBrush(System.Drawing.Color.Black))
                        {
                            g.FillRectangle(blackBrush, textRect);
                        }

                        // Desenha texto branco sobre fundo preto
                        using (var font = new System.Drawing.Font(System.Drawing.FontFamily.GenericSansSerif, 20, System.Drawing.FontStyle.Bold))
                        using (var whiteBrush = new System.Drawing.SolidBrush(System.Drawing.Color.White))
                        using (var sf = new System.Drawing.StringFormat { Alignment = System.Drawing.StringAlignment.Center, LineAlignment = System.Drawing.StringAlignment.Center })
                        {
                            System.Drawing.RectangleF rectF = new System.Drawing.RectangleF(0, qrCodeImage.Height, newWidth, textHeight);
                            g.DrawString(descricao, font, whiteBrush, rectF, sf);
                        }

                        // Converte imagem final para byte[]
                        using (var outputMs = new MemoryStream())
                        {
                            combinedImage.Save(outputMs, System.Drawing.Imaging.ImageFormat.Png);
                            return outputMs.ToArray();
                        }
                    }
                }
            }
        }


    }
}
