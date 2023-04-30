import { useState } from "react";
import { RouteComponentProps } from "@reach/router";

interface FormData {
  id: string;
  name: string;
}

const EditProfilePage: React.FC<RouteComponentProps> = () => {
  const [form, setForm] = useState<FormData>({
    id: "",
    name: "",
  });
  const [error, setError] = useState("");

  async function handleUpdate(data: FormData) {
    if (!data.id || !data.name) {
      setError("Minden mező kitöltése kötelező!");
      return;
    }
    try {
      const response = await fetch(`api/EditProfile?id=${data.id}`, {
        body: JSON.stringify({
          name: data.name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      if (response.ok) {
        setForm({
          id: "",
          name: "",
        });
        setError("");
        alert("Név sikeresen módosítva!");
      } else {
        setError("Hiba történt a név módosítása során!");
      }
    } catch (error) {
      setError("Hiba történt a név módosítása során!");
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(form);
        }}
      >
        <div className="form-group">
          <input
            name="id"
            placeholder="Azonosító"
            value={form.id}
            onChange={(e) =>
              setForm({
                ...form,
                id: e.target.value,
              })
            }
            type="text"
            className="form-style"
          />
        </div>
        <div className="form-group">
          <input
            name="name"
            placeholder="Név"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            type="text"
            className="form-style"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="mt-4 btn">
          Mentés
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;
