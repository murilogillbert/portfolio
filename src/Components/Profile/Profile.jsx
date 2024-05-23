import PropTypes from "prop-types";
import styles from "./Profile.module.css";
import instagramLogo from "./imgs/instagramLogo.png";
import linkedinLogo from "./imgs/linkedinLogo.webp";
import githubIcon from "./imgs/githubIcon.png";

Profile.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    profession: PropTypes.string.isRequired,
    aboutMe: PropTypes.string.isRequired,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default function Profile({ img, name, age, profession, aboutMe, instagram, linkedin, github, email, phone }) {
    return (
        <div className={styles.profileContainer}>
            <div>
                <img src={img} alt={`${name}'s profile`} className={styles.profileImg} />
                <div className={styles.profileName}>{name}</div>
                <div className={styles.profileAge}>Age: {age}</div>
                <div className={styles.profileProfession}>{profession}</div>

            </div>

            <div className={styles.aboutContainer}>
                <div className={styles.aboutMe}>
                    <h3>About Me</h3>
                    <p>{aboutMe}</p>
                    <div className={styles.contactInfo}>
                        <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
                        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                    </div>
                </div>
                <div className={styles.more}>
                    <div className={styles.socialLinks}>
                        {instagram && (
                            <a href={instagram} target="_blank" rel="noopener noreferrer">
                                <img src={instagramLogo} alt="Instagram" />
                            </a>
                        )}
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <img src={linkedinLogo} alt="LinkedIn" />
                            </a>
                        )}
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="GitHub" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
