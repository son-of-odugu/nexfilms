import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export default async function getUrl(key: string, bucketName: string) {
  try {
    const params = {
      Bucket: bucketName,
      Key: key,
      Expires: 60,
    };

    return s3.getSignedUrl("getObject", params);
  } catch (error) {
    throw new Error("Error downloading file");
  }
}
