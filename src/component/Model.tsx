import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
interface Movie {
  title: string;
  release_date: string;
  overview: string;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "fit-content",
  p: 4,
  "@media (max-width: 768px)": {
    width: "90%",
    height: "fit-content",
  },
};

const Model = ({ movie, onClose }: { movie: Movie; onClose?: () => void }) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };
  useEffect(() => {
    handleOpen();
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-black p-8 rounded-lg shadow-lg shadow-black w-fit h-full">
            <h2 className="text-3xl font-bold mb-6 text-yellow-600 border-b-2 border-yellow-400 pb-2">
              Movie Details
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-gray-200 font-semibold">Title:</span>
                <span className="text-xl text-gray-400">{movie.title}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-200 font-semibold">
                  Release Date:
                </span>
                <span className="text-lg text-gray-400">
                  {movie.release_date}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-200 font-semibold ">Overview:</span>
                <p className="text-gray-400 leading-relaxed line-clamp-6">
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Model;
