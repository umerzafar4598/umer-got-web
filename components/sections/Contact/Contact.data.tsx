
import { IoMailOutline } from "react-icons/io5";
import { LuLinkedin, LuGithub, LuPhone, LuMapPin } from "react-icons/lu";

export const contactInfo = [
    {
        icon: <IoMailOutline size={24} />,
        label: 'Email',
        value: 'umerzafar4598@gmail.com',
        link: 'mailto:umerzafar4598@gmail.com',
        color: 'primary',
    },
    {
        icon: <LuPhone size={24} />,
        label: 'Phone',
        value: '+92 340 1506317',
        link: 'tel:+923401506317',
        color: 'accent',
    },
    {
        icon: <LuMapPin size={24} />,
        label: 'Location',
        value: 'Rawalpindi, Pakistan',
        link: null,
        color: 'primary',
    },
]

export const socialLinks = [
    {
        name: 'GitHub',
        icon: <LuGithub size={24} />,
        url: 'https://github.com/umerzafar4598',
        color: 'primary',
    },
    {
        name: 'LinkedIn',
        icon: <LuLinkedin size={24} />,
        url: 'https://www.linkedin.com/in/umer-zafar-575371392/',
        color: 'accent',
    },
]