import Body from "../shared/Body";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="content">
                <Body />
            </main>
            <Footer />
        </div>
    );
}