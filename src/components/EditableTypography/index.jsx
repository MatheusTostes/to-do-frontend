import { TextField, Typography } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const EditableTypography = ({ attr, text, taskId }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const dispatch = useDispatch();

  const updateTask = useCallback(() => {
    dispatch({
      type: "UPDATE_TASK",
      payload: {
        taskId,
        attr,
        text: newText,
      },
    });
  }, [dispatch, taskId, attr, newText]);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    updateTask();
    setEditing(false);
  };

  return (
    <>
      {" "}
      {editing ? (
        <TextField
          fullWidth
          value={newText}
          onChange={() => {
            setNewText(event.target.value);
          }}
          multiline={attr === "description"}
          onBlur={handleBlur}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleBlur();
            }
          }}
          autoFocus
        />
      ) : (
        <Typography
          variant={attr === "name" ? "body" : "body2"}
          onClick={handleEditing}
        >
          {text}
        </Typography>
      )}
    </>
  );
};

EditableTypography.propTypes = {
  text: PropTypes.string.isRequired,
  taskId: PropTypes.number.isRequired,
  attr: PropTypes.string.isRequired,
};

export default EditableTypography;
