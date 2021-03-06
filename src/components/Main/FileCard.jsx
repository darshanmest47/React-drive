import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import "../Main/FileCard.css";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const FileCard = ({ id, size, name, created, url }) => {
  const [display, setDisplay] = useState(false);

  const downloadButtondisplay=()=>{
      setDisplay(true)
  }

  const fileDate = `${created?.toDate().getDate()} ${
    monthNames[created?.toDate().getMonth() + 1]
  } ${created?.toDate().getFullYear()}`;

  //   const namechk = name.toString();
  let fileext = "";
  const textURL =
    "data:image/jpeg;base64,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";
  const pdfURL =
    "data:image/png;base64,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";
  const wordURL =
    "data:image/jpeg;base64,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";
  const excelURL =
    "data:image/jpeg;base64,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";
  const imgURL =
    "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png";
  const fileURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudzh9kZUpLv-wD-5mnQ2E6FwvnpDpTnt-8A&usqp=CAU";

  const getReadableFileSizeString = (fileSizeInBytes) => {
    let i = -1;
    const byteUnits = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  };

  const checkFileType = () => {
    if (name.includes(".txt")) {
      fileext = "text";
    } else if (name.includes(".pdf")) {
      fileext = "pdf";
    } else if (name.includes(".docx")) {
      fileext = "word";
    } else if (name.includes(".xls") || name.includes(".xlsx")) {
      fileext = "excel";
    } else if (
      name.includes(".png") ||
      name.includes(".jpg") ||
      name.includes(".jpeg") ||
      name.includes(".PNG") ||
      name.includes(".JPG") ||
      name.includes(".JPEG")
    ) {
      fileext = "image";
    } else {
      fileext = "document";
    }
  };

  const renderSource = () => {
    checkFileType();

    switch (fileext) {
      case "text":
        return <img className="card__icons" src={textURL} />;

      case "pdf":
        return <img className="card__icons" src={pdfURL} />;

      case "word":
        return <img className="card__icons" src={wordURL} />;

      case "excel":
        return <img className="card__icons" src={excelURL} />;

      case "image":
        return <img className="card__icon_image" src={url} />;

      case "document":
        return <img className="card__icons" src={fileURL} />;

      default:
        return <img className="card__icons" src={fileURL} />;
    }
  };
  return (
    <div className="filecard__div">
      {display ? (
        <Card className="top__card">
            <a href={url} download onClick={()=> console.log(id)}  target="_blank">
            <Button>
            <ArrowDownwardIcon /> <em className="text__details">Download </em>
          </Button>
            </a>
       
        </Card>
      ) : null}

      <Card className="display__card">
        <div className="fileicon__div">{renderSource()}</div>

        <CardContent>
          <div className="display__items">
            <div className="item__div">
              <>
                <em className="text__details">Createdat : {fileDate}</em>
              </>
              <>
                <em className="text__details">
                  Size : {getReadableFileSizeString(size)}
                </em>
              </>
            </div>
            <div className="moredetails__dots">
              <Button size="small" onClick={()=> downloadButtondisplay() }>
                <MoreVertIcon />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FileCard;
