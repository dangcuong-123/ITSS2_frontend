import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../Button";
import "./Comment.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { createComment } from "../../services/CommentServices";

export const Comment = (props) => {
  const [star, setStar] = useState(4);
  const [comment, setComment] = useState();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleSend = () => {
    const data = {
      hotel_id: 1,
      comment_content: comment,
      username: "admin",
      star_number: star,
    };
  };
  return (
    <div>
      {props.comments?.map((comment, idx) => {
        return (
          <div
            keys={idx}
            className="flex justify-between m-2 bg-slate-200 p-2 rounded-lg"
          >
            <div className="flex items-center">
              {/* <img className="w-10 h-10 rounded-full" src="" alt="" /> */}
              <div className="ml-3">
                <p className="text-lg font-bold text-gray-900">
                  {comment.user_name}
                </p>
                <div className="flex space-x-1 text-xs text-gray-500">
                  <time>{formatDate(comment.comment_time)}</time>
                </div>
                <p className="text-lg font-sans text-gray-900">
                  {comment.comment_content}
                </p>
              </div>
            </div>
            <div>
              {new Array(comment.star_number).fill(0).map((_, index) => (
                <span keys={index} className="fa fa-star checked"></span>
              ))}
              {new Array(5 - comment.star_number).fill(0).map((_, index) => (
                <span keys={index} className="fa fa-star"></span>
              ))}
            </div>
          </div>
        );
      })}
      <p className="mt-3 text-lg font-bold text-gray-700">Bình luận</p>
      <div className="pb-8">
        <Input
          type="text"
          placeholder="Bình luận"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Box className="ml-4">
          <Rating
            name="simple-controlled"
            value={star}
            onChange={(event, newValue) => {
              setStar(newValue);
            }}
          />
        </Box>
        <Button onClick={handleSend}>Gửi</Button>
      </div>
    </div>
  );
};
