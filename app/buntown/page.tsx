'use client'

export default function Buntown() {
    return (
        <div className="flex justify-center items-center h-screen">
            <table className="bg-amber-700 border-2 border-amber-50">
                <caption>Buntown Population Registry</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Check-in date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John B. Town</td>
                        <td>November 20 1955</td>
                    </tr>
                    <tr>
                        <td>Marquee Syne</td>
                        <td>November 26 1955</td>
                    </tr>
                    <tr>
                        <td>Alex Akey</td>
                        <td>January 17 1956</td>
                    </tr>
                    <tr>
                        <td>John Huss</td>
                        <td>October 1 2026</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}