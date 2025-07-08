function EditModal({ id, name, lastName, email, phone }) {
  const submitHandler = () => {};

  return (
    <div className={styles.container}>
      <h3>Edit Contact</h3>
      <input type="text" name="name" value={name} onChange={changeHandler} />
      <input
        type="email"
        name="email"
        value={lastName}
        onChange={changeHandler}
      />
      <input type="text" name={name} value={name} onChange={changeHandler} />{" "}
      <input type="text" name={name} value={name} onChange={changeHandler} />
    </div>
  );
}

export default EditModal;
