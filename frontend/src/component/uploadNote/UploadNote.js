import React, { useRef } from "react";
import "./UploadNote.css";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  CloudUpload,
  Close,
  PictureAsPdf,
  AddCircle,
  Image,
} from "@material-ui/icons";
import { publicRequest } from "../../requestMethods";
import { makeStyles } from "@material-ui/core/styles";
import { mobile } from "../../responsive";
const useStyles = makeStyles((theme) => ({
  uploadIcon: {
    color: "#8da6ff",
    fontSize: "3rem",
  },
  UploadPdfIcon: {
    color: "#167eec",
    fontSize: "3rem",
  },
  closeIcon: {
    fontSize: "3rem",
  },
  uploadAdd: {
    color: "#8da6ff",
    fontSize: "3rem",
  },
  upload: {
    color: "#8da6ff",
    fontSize: "2rem",
  },
}));
const UploadNote = () => {
  const { currentUser: user } = useSelector((state) => state.user);
  const pf = "https://notesharingbackend-ankitkr437.onrender.com/images/";

  const ShowForm = useRef();
  const notename = useRef();
  const descritpion = useRef();
  const [isupload, setsetisupload] = useState(false);
  const [file, setfile] = useState("");
  const [fileimg, setfileimg] = useState(null);
  const ShowFormHandler = () => {
    if ((ShowForm.current.style.display = "flex"))
      ShowForm.current.style.display = "none";
  };

  const uploadNoteFormSubmitHandler = async (e) => {
    alert("Uploading started, it will take few minutes...");
    e.preventDefault();
    const newNote = {
      userId: user._id,
      desc: descritpion.current.value,
      notename: notename.current.value,
      notefilename: file,
    };
    if (fileimg) {
      const data = new FormData();
      data.append("file", fileimg);
      data.append("upload_preset", "handnoteimages");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dw2fok6if/image/upload",
        data
      );
      newNote.thumbnailfilename = await res.data.secure_url;
    }
    try {
      await publicRequest.post("/notes", newNote);
      window.location.reload();
      alert("successfully uploaded");
    } catch (err) {}
  };

  const classes = useStyles();
  return (
    <>
      {!isupload && (
        <div className="upload-container">
          <div
            className="uploadNote-post"
            onClick={() => {
              setsetisupload((curr) => !curr);
            }}
          >
            {/* <PictureAsPdf className={classes.UploadPdfIcon} /> */}
            <p className="uploadNote-post-text">Upload Your Note</p>
            <CloudUpload className={classes.uploadIcon} />
          </div>
        </div>
      )}
      {isupload && (
        <div className="uploadNote-form-active">
          <div className="uploadNote-form-container">
            <div className="upload-note-top">
              <div className="upload-note-top-left">
                <AddCircle className={classes.uploadAdd} />
                <p className="upload-note-title">Upload a Note</p>
              </div>
              <Close
                onClick={() => {
                  setsetisupload((curr) => !curr);
                }}
                className={classes.closeIcon}
                id="close-icon"
              />
            </div>
            <form
              onSubmit={uploadNoteFormSubmitHandler}
              className="uploadNote-form"
            >
              <input
                type="text"
                placeholder="Notename(not more than 30 character)*"
                className="uploadNote-form-note-name"
                id="upload-note-input"
                ref={notename}
                maxLength="30"
                required
              ></input>
              <input
                type="text"
                placeholder="Descritpion(not more than 300 character)*"
                className="uploadNote-form-descritpion"
                ref={descritpion}
                id="upload-note-input"
                maxLength="300"
                required
              ></input>

              <input
                // accept="application/pdf"
                type="text"
                id="upload-note-input"
                onChange={(e) => setfile(e.target.value)}
                placeholder="Url of note*"
                required
              ></input>

              <label for="thumbnail-file-upload" className="custom-file-upload">
                <Image className={classes.upload} />
                <p>Upload a thumbnail image</p>
                <CloudUpload className={classes.upload} />
              </label>
              <input
                placeholder="Thumbnail image"
                type="file"
                id="thumbnail-file-upload"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setfileimg(e.target.files[0])}
              ></input>
              <button type="submit" className="uploadNote-form-submit-button">
                Upload
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadNote;
// const UploadNote = () => {
//   const notename = useRef();
//   const descritpion = useRef();
//   const { currentUser: user } = useSelector((state) => state.user);

//   const [isupload, setsetisupload] = useState(false);
//   const [fileimg, setfileimg] = useState(null);

//   const ShowFormHandler = () => {
//     setsetisupload(!isupload);
//   };

//   const uploadNoteFormSubmitHandler = async (e) => {
//     e.preventDefault();
//     alert("Uploading started, it will take a few minutes...");
//     const newNote = {
//       userId: user._id,
//       desc: descritpion.current.value,
//       notename: notename.current.value,
//     };

//     try {
//       // Upload PDF file to Cloudinary
//       const pdfData = new FormData();
//       pdfData.append("file", fileimg);
//       pdfData.append("upload_preset", "handnotepdfs");
//       const res = await axios.post(
//         "https://api.cloudinary.com/v1_1/dw2fok6if/image/upload",
//         pdfData
//       );
//       newNote.pdfUrl = res.data.secure_url;

//       // Save newNote to MongoDB
//       await publicRequest.post("/notes", newNote);
//       alert("Successfully uploaded");
//       window.location.reload();
//     } catch (err) {
//       console.error("Error uploading note:", err);
//     }
//   };

//   const classes = useStyles();
//   return (
//     <>
//       {!isupload && (
//         <div className="upload-container">
//           <div className="uploadNote-post" onClick={ShowFormHandler}>
//             <p className="uploadNote-post-text">Upload Your Note</p>
//             <CloudUpload className={classes.uploadIcon} />
//           </div>
//         </div>
//       )}
//       {isupload && (
//         <div className="uploadNote-form-active">
//           <div className="uploadNote-form-container">
//             <div className="upload-note-top">
//               <div className="upload-note-top-left">
//                 <AddCircle className={classes.uploadAdd} />
//                 <p className="upload-note-title">Upload a Note</p>
//               </div>
//               <Close
//                 onClick={ShowFormHandler}
//                 className={classes.closeIcon}
//                 id="close-icon"
//               />
//             </div>
//             <form
//               onSubmit={uploadNoteFormSubmitHandler}
//               className="uploadNote-form"
//             >
//               <input
//                 type="text"
//                 placeholder="Notename (not more than 30 characters)*"
//                 className="uploadNote-form-note-name"
//                 ref={notename}
//                 maxLength="30"
//                 required
//               ></input>
//               <input
//                 type="text"
//                 placeholder="Description (not more than 300 characters)*"
//                 className="uploadNote-form-description"
//                 ref={descritpion}
//                 maxLength="300"
//                 required
//               ></input>

//               <label for="pdf-file-upload" className="custom-file-upload">
//                 <PictureAsPdf className={classes.upload} />
//                 <p>Upload a PDF file</p>
//                 <CloudUpload className={classes.upload} />
//               </label>
//               <input
//                 type="file"
//                 id="pdf-file-upload"
//                 accept=".pdf"
//                 onChange={(e) => setfileimg(e.target.files[0])}
//                 required
//               ></input>

//               <button type="submit" className="uploadNote-form-submit-button">
//                 Upload
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UploadNote;
