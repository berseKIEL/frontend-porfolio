import styles from '@/styles/layout.module.css'

const AppLanguage = () => {
  return (
    <>
      <button
        className={`${styles.layoutLanguageButton} p-link`}
        type="button"
      >
        <i className="pi pi-cog"></i>
      </button>
    </>
  );
};

export default AppLanguage;
