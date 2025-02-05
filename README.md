# Getting Started with Create React App

This is the updated guest frontend repo

## Configuration

The public directory is not linked to this repo. all references of media files in the public directory have been replaced with an equavalent reference on S3. Moving forward, we need to replace the references to the old production env (ex: https://kurifturesorts.com/_nuxt/img/17.d92b745.jpg) with S3 references.

### to upload media files to the S3 bucket

1. Get S3 Access Key & Secret Key (Ask Brook for env variables)
2. install AWS CLI
3. Run

```sh
aws configure
```

4. Test access

```sh
aws s3 ls s3://kuriftu-public-media
```

5. Upload a single file

```sh
aws s3 cp ./public/media/[folder_name]/[file.jpg] s3://kuriftu-public-media/[folder_name]/[file.jpg]
```

6. Upload an Entire Folder

```sh
aws s3 cp ./public/media/[folder_name]/ s3://kuriftu-public-media/[folder_name]/ --recursive

```

7. Sync Local Files to S3

```sh
aws s3 sync ./public/media/ s3://kuriftu-public-media/
```

8. Get the Public URL of an Uploaded File
   S3 URLs follow this pattern: https://kuriftu-public-media.s3.amazonaws.com/path/to/file.jpg

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
