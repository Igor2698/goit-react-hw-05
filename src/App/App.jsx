import css from "../App/App.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { ImageModal } from "../ImageModal/ImageModal";
import { Loader } from "../Loader/Loader";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";
import { fetchImages } from "../images-api";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import customStyles from "../custom-styles";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [imageForModal, setImageForModal] = useState("");
  const [valueToSearch, setValueToSearch] = useState("");
  const [firstRender, setFirstRender] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }

    async function handleSearch(value) {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(value, page);

        if (page === 1 && data.results.length > 0) {
          toast(`Congratulations! We found ${data.total} pictures`);
        }
        if (data.results.length === 0) {
          toast(`No pictures found`);
        }
        if (page === data.total_pages) {
          toast(`You have reached the end of the collection`);
        }

        setTotalPages(data.total_pages);
        setImages([...images, ...data.results]);
        setLoading(false);
      } catch {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }

    handleSearch(valueToSearch);
  }, [page, valueToSearch]);

  useEffect(() => {
    setPage(1);
  }, [valueToSearch]);

  function toggleModal() {
    setIsOpen(!modalIsOpen);
    document.body.style.overflow = modalIsOpen ? "auto" : "hidden";
  }

  const getImageForModal = (img) => {
    setImageForModal(img);
  };

  const onSearchButton = (value) => {
    if (value.trim() === "") {
      return toast("Value cannot be empty");
    }
    setValueToSearch(value);
    setImages([]);
  };

  return (
    <>
      <ToastContainer />
      <SearchBar onSearch={onSearchButton} />

      {error && <ErrorMessage />}
      {images.length > 0 && !error && (
        <section className={css.section}>
          <ImageGallery
            dates={images}
            toggleModal={toggleModal}
            getImageForModal={getImageForModal}
          />
        </section>
      )}
      {loading && <Loader />}
      {images.length > 0 && page !== totalPages && (
        <LoadMoreButton onLoadMoreClick={() => setPage(page + 1)} />
      )}
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={customStyles}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
      >
        <ImageModal toggleModal={toggleModal} imageForModal={imageForModal} />
      </Modal>
    </>
  );
}

export default App;
