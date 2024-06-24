export const metadata = { title: "About" };
import style from './style.module.scss'
export default async function About() {

    return (
        <div className={`${style.contain} `}>
            <div className={style.typingEffect}>
           "The largest site in Israel for carpets and parquets - the change starts from the bottom"

            </div>
        </div>
    )
}
