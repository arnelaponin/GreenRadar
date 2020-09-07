import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import styles from "./initiative-form.module.scss";

type InitiativeInterface = {
  name: string;
  url: string;
  contact: string;
  address: string;
};

function InitiativeForm(): ReactElement {
  const { register, handleSubmit, errors } = useForm<InitiativeInterface>();
  const onSubmit = (data) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="name">Intitiative Name</label>
      <input id="name" name="name" ref={register({ required: true })} />
      {errors.name && <span>Name of the initiative is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="url">Url</label>
      <input id="url" name="url" ref={register} />

      <label htmlFor="contact">Contact (phone or email)</label>
      <input id="contact" name="contact" ref={register} />

      <label htmlFor="address">Address</label>
      <input id="address" name="address" ref={register} />

      <input type="submit" />
    </form>
  );
}

export default InitiativeForm;
