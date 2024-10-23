import { useState } from "react";
import styles from "./ConfirmDialog.module.css";
import axios from "axios";
import toast from "react-hot-toast";

function ConfirmDialog({ dialog, setDialog, caller }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    // let _id = dialog._id;
    try {
      setIsLoading(true);
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/${caller}/${dialog._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("alumni-token")}`,
          },
        }
      );
      console.log(data);
      toast.success("Successfully deleted.Please refresh the page");
      setDialog({ ...dialog, isOpen: false, deleted: true });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Sorry, it could not be deleted");
      setIsLoading(false);
    }
    //
  };

  return (
    <div className={styles.dialog}>
      <div className={styles.container}>
        <h1>Do you want to delete this article?</h1>
        <div>
          <button disabled={isLoading} onClick={handleDelete}>
            Confirm
          </button>
          <button
            disabled={isLoading}
            className={styles.close}
            onClick={() => {
              setDialog({ ...dialog, isOpen: false });
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
