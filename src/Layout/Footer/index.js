import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Footer() {
    return <div className={cx('container-footer')}>Footer</div>;
}

export default Footer;
