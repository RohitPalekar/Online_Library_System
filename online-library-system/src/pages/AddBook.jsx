import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/bookSlice";
import BookForm from "../components/BookForm";

export default function AddBook() {
  // for entitywise data here data will be stored
  const [formInput, setFormInput] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    rating: 1,
    publishDate: "",
    pages: "",
    coverImage: "",
  });

  // For errors
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // This will validates input if not entered before submit
  const checkErrors = () => {
    const mistakes = {};
    if (!formInput.title.trim()) mistakes.title = "Please enter title.";
    if (!formInput.author.trim()) mistakes.author = "Please enter author.";
    if (!formInput.category) mistakes.category = "Please pick a category.";
    if (!formInput.publishDate) mistakes.publishDate = "Please enter Date.";
    if (!formInput.coverImage.trim()) mistakes.coverImage = "Please enter Cover image URL.";
    return mistakes;
  };

  // When form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorList = checkErrors();
    if (Object.keys(errorList).length > 0) {
      setFormErrors(errorList);
      return;
    }

    // Dispatch action to add the new book
    dispatch(addBook({ ...formInput, id: Date.now() }));
    // redirect to browse page
    navigate("/browse");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white border p-6 rounded-md">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Add a New Book</h2>
      <BookForm
        formData={formInput}
        setFormData={setFormInput}
        errors={formErrors}
        onSubmit={handleSubmit}
        buttonText="Add Book"
      />
    </div>
  );
}
