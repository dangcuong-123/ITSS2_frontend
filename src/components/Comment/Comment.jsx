import React from "react";
import Input from "../../components/Input";
import Button from "../Button";
import "./Comment.css";

export const Comment = (props) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div>
      {props.comments?.map((comment, idx) => {
        return (
          <div keys={idx} className="flex justify-between m-2">
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
      <p className="mt-3 text-sm text-gray-700">Comment</p>
      <hr className="mb-8" />
      <div className="pb-8">
        <Input type="text" placeholder="Comment" />
        <Button>Send</Button>
      </div>
    </div>
  );
};
