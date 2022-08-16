import React from 'react';
import "../styles/contactUs.css";
import location from "../assets/icons/location-pin.svg";
import phone from "../assets/icons/phone 2.svg";
import mail from "../assets/icons/email.svg";
import Recommendation from '../components/homeRecommendations/Recommendation';

const ContactUs = () => {
    return (
        <div className='contact-page'>
            <div className="container">
                <h3>КОНТАКТЫ</h3>
                <ul>
                    <li><a href='https://www.google.com/maps/place/%D0%94%D0%B6%D0%BE%D0%BC%D0%BE%D0%BB%D1%83%D0%BD%D0%B3%D0%BC%D0%B0/@27.9880737,86.9249506,20.67z/data=!4m13!1m7!3m6!1s0x0:0x8d17e48fff73d699!2zMjfCsDU5JzE3LjAiTiA4NsKwNTUnMzEuMCJF!3b1!8m2!3d27.9880556!4d86.9252778!3m4!1s0x39e854a215bd9ebd:0x576dcf806abbab2!8m2!3d27.9881206!4d86.9249751?hl=ru-KG'><img src={location} alt="" />г. Подольск, ул. Циолковского, 3а</a></li>
                    <li><a href='tel:8 800 345 45 67'><img src={phone} alt="" />8 800 345 45 67</a></li>
                    <li><a href='mailto:vmeste@gmail.com'><img src={mail} alt="" />vmeste@gmail.com</a></li>
                </ul>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d277.03352397977926!2d86.92495061579297!3d27.988073677821166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2z0JTQttC-0LzQvtC70YPQvdCz0LzQsA!5e0!3m2!1sru!2skg!4v1660631994122!5m2!1sru!2skg" width="100%" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Recommendation />
            </div>
        </div>
    );
};

export default ContactUs;