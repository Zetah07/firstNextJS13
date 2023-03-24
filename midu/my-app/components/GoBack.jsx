'use client';

export default function GoBack() {
    return (
        <div>
            <button onClick={() => window.history.back()}>◀️</button>
        </div>
    );

}