import Navbar from "../components/Sidebar";
import React from "react";
import "./instruments.css"
import { Link } from "react-router-dom";

const Instruments = () => {
    return (
        <div>
            <Navbar />
            <div style={{ textAlign: 'right' }}>
                <h1>Instruments</h1>
                <div class="cards">
                    <div class="card card-1">
                        <div class="card__icon"><i class="fa-solid fa-drum"></i></div>
                        <h2 class="card__title">Bodhran</h2>
                        <p class="card__apply">
                            <Link className="card__link" to="/bodhran">let's go <i class="fas fa-arrow-right"></i></Link>
                        </p>
                    </div>
                    <div class="card card-2">
                        <div class="card__icon"><i class="fa-solid fa-drum"></i></div>
                        <h2 class="card__title">Fiddle</h2>
                        <p class="card__apply">
                            <Link className="card__link" to="/fiddle">let's go <i class="fas fa-arrow-right"></i></Link>
                        </p>
                    </div>
                    <div class="card card-3">
                        <div class="card__icon"><i class="fa-solid fa-drum"></i></div>
                        <h2 class="card__title">Harp</h2>
                        <p class="card__apply">
                            <Link className="card__link" to="/harp">let's go <i class="fas fa-arrow-right"></i></Link>
                        </p>
                    </div>
                    <div class="card card-4">
                        <div class="card__icon"><i class="fa-solid fa-drum"></i></div>
                        <h2 class="card__title">Irish Flute</h2>
                        <p class="card__apply">
                            <Link className="card__link" to="/flute">let's go <i class="fas fa-arrow-right"></i></Link>
                        </p>
                    </div>
                    <div class="card card-5">
                        <div class="card__icon"><i class="fa-solid fa-drum"></i></div>
                        <h2 class="card__title">Tin Whistle</h2>
                        <p class="card__apply">
                            <Link className="card__link" to="/whistle">let's go <i class="fas fa-arrow-right"></i></Link>
                        </p>
                    </div>
                    <div class="card card-1">
                        <div class="card__icon"><i class="fa-solid fa-drum"></i></div>
                        <h2 class="card__title">Uilleann Pipe</h2>
                        <p class="card__apply">
                            <Link className="card__link" to="/pipe">let's go <i class="fas fa-arrow-right"></i></Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Instruments;
