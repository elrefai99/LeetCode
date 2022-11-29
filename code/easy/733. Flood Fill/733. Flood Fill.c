void paint(int** image, int imageSize, int* imageColSize,
          int sr, int sc, int newColor, int oldColor)
{
    if (sr < 0 || sr >= imageSize)
        return;
    if (sc < 0 || sc >= imageColSize[0])
        return;
    
    if (image[sr][sc] == oldColor) {
        image[sr][sc] = newColor;
        paint(image, imageSize, imageColSize, sr - 1, sc, newColor, oldColor);
        paint(image, imageSize, imageColSize, sr + 1, sc, newColor, oldColor);
        paint(image, imageSize, imageColSize, sr, sc - 1, newColor, oldColor);
        paint(image, imageSize, imageColSize, sr, sc + 1, newColor, oldColor);
    }
}
int** floodFill(int** image, int imageSize, int* imageColSize,
                int sr, int sc, int newColor,
                int* returnSize, int** returnColumnSizes)
{
    int i;
    
    *returnSize = imageSize;
    *returnColumnSizes = malloc(sizeof(int) * imageSize);
    for (i = 0; i < imageSize; i++)
        (*returnColumnSizes)[i] = imageColSize[i];
    if (newColor != image[sr][sc])
        paint(image, imageSize, imageColSize,
                sr, sc, newColor, image[sr][sc]);
    
    return image;
}