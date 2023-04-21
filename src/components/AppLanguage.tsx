import styles from '@/styles/layout.module.css';

const Languages = () => {
  const component = (
    <div>
      <h1> Español </h1>
      <h1> English </h1>
    </div>
  );
  
  return component;
};

const AppLanguage = () => {
  return (
    <>
      <button
        className={`${styles.layoutLanguageButton} p-link`}
        type="button"
      >
        <i className="pi pi-flag"></i>
      </button>
    </>
  );
};

export default AppLanguage;
