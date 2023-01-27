import { storage } from "./config";
export async function uploadImage(image) {
    return new Promise(
        function (resolve, reject) {
            const storageRef = storage.ref();
            const uploadTask = storageRef.child(`/Images/${image.name}`).put(image);

            uploadTask.on('state_changed',
                function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log('Upload is ' + progress + '% done')
                },
                function error(err) {
                    console.log('error', err)
                    reject()
                },
                function complete() {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        resolve(downloadURL)
                    })
                }
            )
        }
    )
}