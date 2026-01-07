'use client';

import React, { useState, FormEvent } from "react";

export default function LockedDoor() {
    const [pin, setPin] = useState("");
    const PIN_LENGTH = 4;
    const isValid = pin.length === PIN_LENGTH;

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (isValid) {
            console.log("Submitting PIN:", pin);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center font-sans p-4">
            <div
                className="w-90  rounded-xl p-6 shadow-2xl text-center"
                role="dialog"
                aria-labelledby="locked-title"
            >
                <div className="flex justify-center mb-3">
                    
                </div>

                <h2 id="locked-title" className="">
                    Laptop Locked
                </h2>

                <p className="text-sm text-slate-200/70 mb-4">Enter your {PIN_LENGTH}-digit PIN to unlock</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center w-full" aria-describedby="hint">
                    <input
                        id="pin"
                        type="password"
                        inputMode="numeric"
                        pattern={`\\d{${PIN_LENGTH}}`}
                        maxLength={PIN_LENGTH}
                        value={pin}
                        onChange={(e) => {
                            const digits = e.target.value.replace(/\D/g, "");
                            setPin(digits);
                        }}
                        placeholder={"•".repeat(PIN_LENGTH)}
                        autoComplete="one-time-code"
                        aria-label="PIN code"
                        aria-required
                        className="w-full max-w-[240px] text-center tracking-widest outline-none"
                    />

                    <div className="w-full flex justify-center">
                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`${
                                isValid
                                    ? ""
                                    : "cursor-not-allowed"
                            }`}
                        >
                            Log In
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
