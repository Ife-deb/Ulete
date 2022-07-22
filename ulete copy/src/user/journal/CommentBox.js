import React, { useState, useRef } from "react";
import cn from "classnames";
import useDynamicHeightField from "../useDynamicHeightField";
import './test.css';
import heroImage from '../../img/heroImage.png';

const INITIAL_HEIGHT = 46;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/how-to-build-an-expandable-comment-box
 */
export default function CommentBox({moodName, factor, page, setPage}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useDynamicHeightField(textRef, commentValue);

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue("");
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("send the form data somewhere");
  };

  function goBackPage(){
    setPage(page => page - 1)
  }

  return (
    <div className="container">
      <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={cn("comment-box", {
          expanded: isExpanded,
          collapsed: !isExpanded,
          modified: commentValue.length > 0
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
        }}
      >
        <div className="header">
          <div className="user">
            <img
              src={heroImage}
              alt="User avatar"
            />
            <span>Feeling: <b>{moodName} </b> because of <b>{factor}</b> factors</span>
          </div>
        </div>
        <label htmlFor="comment">Tell us more...</label>
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChange}
          className="comment-field"
          placeholder="Tell us more..."
          value={commentValue}
          name="comment"
          id="comment"
        />
        <div className="actions">
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={commentValue.length < 1}>
            Log Mood
          </button>
        </div>
      </form>
      <button onClick={goBackPage} className='btn btn-secondary'>Back</button>

    </div>
  );
}
