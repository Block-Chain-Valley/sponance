import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Dataload.module.css";

interface Userdata {
  username: string;
  password: string;
  email: string;
}

const Dataload = () => {
  const [userData, setUserData] = useState<Userdata[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      username: "",
      password: "",
      email: "",
    });
    console.log(inputs);
  };

  const send = () => {
    try {
      axios.post("http://127.0.0.1:5000/ele", inputs);
      onReset();
      console.log(inputs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUserData(null);
        setLoading(true);
        const response = await axios.get("http://127.0.0.1:5000/ele");
        setUserData(response.data);
      } catch (error) {
        setError(error as string);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}></div>
      {loading ? (
        <div>loading.....</div>
      ) : (
        <div>
          {error ? (
            <div>error occur : {error}</div>
          ) : (
            <div>
              <div>All Userdata</div>
              {/* <div>{userData}</div> */}
              <ul>
                {userData ? (
                  userData.map((user) => (
                    <li key={user.username}>
                      {user.username}, {user.password}, {user.email}
                    </li>
                  ))
                ) : (
                  <div>userData is null</div>
                )}
              </ul>
            </div>
          )}
        </div>
      )}
      <div>POST USER DATA</div>
      <div className={styles.inputContainer}>
        <div className={styles.innerContainer}>
          <div>username</div>
          <input
            name="username"
            value={inputs.username}
            onChange={onChange}
            className={styles.input}
          ></input>
        </div>
        <div className={styles.innerContainer}>
          <div>password</div>
          <input
            name="password"
            value={inputs.password}
            onChange={onChange}
            className={styles.input}
          ></input>
        </div>
        <div className={styles.innerContainer}>
          <div>email</div>
          <input
            name="email"
            value={inputs.email}
            onChange={onChange}
            className={styles.input}
          ></input>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.btn} onClick={onReset}>
            RESET
          </div>
          <div className={styles.btn} onClick={send}>
            POST
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataload;
