import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
/*Structure:
    description: "......"
    id: "......"
    title: "......"
    username: "....."
*/

interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().required("You must add a Title!!"),
    description: yup.string().required("You must add Description!!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postRef, {
      //   title: data.title,
      //   description: data.description,
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit(onCreatePost)}>
      <input
        className="form-input"
        placeholder="Title..."
        {...register("title")}
      />
      <p className="warning">{errors.title?.message}</p>
      <textarea
        className="form-input"
        placeholder="Description..."
        {...register("description")}
      />
      <p className="warning">{errors.description?.message}</p>
      <input type="Submit" />
    </form>
  );
};
