export default function Form({ errorMessage, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <label>
                <span>Type your GitHub username</span>
                <input type="text" name="username" required />
            </label>

            <button type="submit" className="text-white">Login</button>

            {errorMessage && <p className="error">{errorMessage}</p>}

            <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
        }
        label > span {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error {
          color: brown;
          margin: 1rem 0 0;
        }
      `}</style>
        </form>
    );
}