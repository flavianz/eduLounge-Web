import "./svg.css";
export default function SVGIcon({
    id,
    className,
}: {
    id:
        | "logo-text"
        | "checkmark"
        | "logo-notext"
        | "simple-graphic"
        | "complex-graphic"
        | "show-password"
        | "hide-password";
    className?: string;
}) {
    const defaultParams = { className: className };
    switch (id) {
        case "logo-text":
            return (
                <svg
                    id="uuid-5d22d422-8a33-40a0-8274-7fd8fc06751d"
                    data-name="Ebene 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1903.44 507.8"
                    {...defaultParams}
                >
                    <defs>
                        <style></style>
                    </defs>
                    <text />
                    <g>
                        <path
                            className="logo-text-1"
                            d="m666.14,278.68h-65.19c.08,7.57,1.61,14.24,4.58,20.02,2.97,5.78,6.92,10.13,11.84,13.06,4.92,2.93,10.35,4.39,16.3,4.39,3.99,0,7.63-.47,10.93-1.4,3.3-.93,6.49-2.4,9.58-4.39,3.09-1.99,5.94-4.13,8.54-6.41,2.6-2.28,5.98-5.37,10.13-9.28,1.71-1.46,4.15-2.2,7.32-2.2,3.42,0,6.18.94,8.3,2.81,2.12,1.87,3.17,4.52,3.17,7.93,0,3.01-1.18,6.53-3.54,10.56-2.36,4.03-5.92,7.89-10.68,11.6-4.76,3.7-10.74,6.78-17.94,9.22s-15.48,3.66-24.84,3.66c-21.4,0-38.05-6.1-49.93-18.31-11.88-12.21-17.82-28.77-17.82-49.68,0-9.85,1.46-18.98,4.39-27.4s7.2-15.64,12.82-21.67c5.62-6.02,12.53-10.64,20.75-13.85,8.22-3.21,17.33-4.82,27.34-4.82,13.02,0,24.19,2.75,33.51,8.24,9.32,5.49,16.3,12.59,20.94,21.3,4.64,8.71,6.96,17.58,6.96,26.61,0,8.38-2.4,13.81-7.2,16.3-4.8,2.48-11.56,3.72-20.26,3.72Zm-65.19-18.92h60.42c-.81-11.39-3.89-19.92-9.22-25.57-5.33-5.66-12.35-8.48-21.06-8.48s-15.12,2.87-20.45,8.61c-5.33,5.74-8.57,14.22-9.7,25.45Z"
                        />
                        <path
                            className="logo-text-1"
                            d="m812.99,319.21v-3.3c-4.48,5.13-8.89,9.3-13.24,12.51-4.35,3.22-9.08,5.66-14.16,7.32-5.09,1.67-10.64,2.5-16.66,2.5-7.98,0-15.36-1.69-22.16-5.07-6.8-3.38-12.68-8.2-17.64-14.46-4.96-6.27-8.73-13.63-11.29-22.09-2.56-8.46-3.85-17.62-3.85-27.47,0-20.83,5.08-37.07,15.26-48.71,10.17-11.64,23.56-17.46,40.16-17.46,9.6,0,17.7,1.65,24.29,4.94s13.02,8.36,19.29,15.2v-49.19c0-6.84,1.36-12,4.09-15.5,2.73-3.5,6.61-5.25,11.66-5.25s8.93,1.61,11.66,4.82c2.73,3.22,4.09,7.96,4.09,14.22v146.97c0,6.35-1.46,11.11-4.39,14.28s-6.71,4.76-11.35,4.76-8.32-1.65-11.29-4.94c-2.97-3.3-4.46-8-4.46-14.1Zm-65.55-48.95c0,9.03,1.4,16.72,4.21,23.07s6.65,11.13,11.54,14.34c4.88,3.22,10.21,4.82,15.99,4.82s11.21-1.53,16.05-4.58c4.84-3.05,8.71-7.73,11.6-14.04,2.89-6.31,4.33-14.18,4.33-23.62,0-8.87-1.45-16.5-4.33-22.89-2.89-6.39-6.8-11.27-11.72-14.65-4.92-3.38-10.31-5.07-16.17-5.07s-11.56,1.73-16.36,5.19c-4.8,3.46-8.53,8.42-11.17,14.89-2.65,6.47-3.97,13.98-3.97,22.52Z"
                        />
                        <path
                            className="logo-text-1"
                            d="m964.48,319.45v-4.27c-3.99,5.05-8.18,9.28-12.57,12.7s-9.2,5.96-14.4,7.63c-5.21,1.67-11.15,2.5-17.82,2.5-8.06,0-15.28-1.67-21.67-5-6.39-3.34-11.33-7.93-14.83-13.79-4.15-7.08-6.23-17.25-6.23-30.52v-66.04c0-6.67,1.5-11.66,4.52-14.95,3.01-3.3,7-4.94,11.96-4.94s9.11,1.67,12.21,5c3.09,3.34,4.64,8.3,4.64,14.89v53.34c0,7.73.65,14.22,1.95,19.47,1.3,5.25,3.64,9.36,7.02,12.33,3.38,2.97,7.95,4.46,13.73,4.46s10.9-1.67,15.87-5c4.96-3.34,8.58-7.69,10.86-13.06,1.87-4.72,2.81-15.05,2.81-31.01v-40.53c0-6.59,1.54-11.55,4.64-14.89,3.09-3.34,7.12-5,12.08-5s8.95,1.65,11.96,4.94c3.01,3.3,4.52,8.28,4.52,14.95v96.56c0,6.35-1.45,11.11-4.33,14.28-2.89,3.17-6.61,4.76-11.17,4.76s-8.32-1.65-11.29-4.94c-2.97-3.3-4.46-7.91-4.46-13.85Z"
                        />
                        <path
                            className="logo-text-1"
                            d="m1066.77,175.17v130.25h73.49c5.86,0,10.35,1.42,13.49,4.27,3.13,2.85,4.7,6.43,4.7,10.74s-1.55,7.96-4.64,10.68c-3.09,2.73-7.61,4.09-13.55,4.09h-87.53c-7.89,0-13.57-1.75-17.03-5.25-3.46-3.5-5.19-9.16-5.19-16.97v-137.82c0-7.32,1.65-12.82,4.94-16.48s7.63-5.49,13-5.49,9.87,1.81,13.24,5.43c3.38,3.62,5.07,9.14,5.07,16.54Z"
                        />
                        <path
                            className="logo-text-1"
                            d="m1304.69,270.5c0,9.93-1.55,19.08-4.64,27.47-3.09,8.38-7.57,15.58-13.43,21.61-5.86,6.02-12.86,10.64-21,13.85-8.14,3.21-17.29,4.82-27.46,4.82s-19.17-1.63-27.22-4.88-15.04-7.91-20.93-13.98c-5.9-6.06-10.38-13.22-13.43-21.48-3.05-8.26-4.58-17.39-4.58-27.4s1.54-19.33,4.64-27.71c3.09-8.38,7.53-15.54,13.3-21.48,5.78-5.94,12.78-10.52,21-13.73,8.22-3.21,17.29-4.82,27.22-4.82s19.24,1.63,27.46,4.88c8.22,3.26,15.26,7.89,21.12,13.92,5.86,6.02,10.31,13.18,13.37,21.48s4.58,17.46,4.58,27.47Zm-33.45,0c0-13.59-2.99-24.17-8.97-31.74s-14.02-11.35-24.11-11.35c-6.51,0-12.25,1.69-17.21,5.07-4.96,3.38-8.79,8.36-11.47,14.95s-4.03,14.28-4.03,23.07,1.32,16.32,3.97,22.83c2.64,6.51,6.43,11.5,11.35,14.95,4.92,3.46,10.72,5.19,17.4,5.19,10.09,0,18.13-3.8,24.11-11.41,5.98-7.61,8.97-18.13,8.97-31.55Z"
                        />
                        <path
                            className="logo-text-1"
                            d="m1417.48,319.45v-4.27c-3.99,5.05-8.18,9.28-12.57,12.7s-9.2,5.96-14.4,7.63c-5.21,1.67-11.15,2.5-17.82,2.5-8.06,0-15.28-1.67-21.67-5-6.39-3.34-11.33-7.93-14.83-13.79-4.15-7.08-6.22-17.25-6.22-30.52v-66.04c0-6.67,1.5-11.66,4.52-14.95,3.01-3.3,7-4.94,11.96-4.94s9.11,1.67,12.21,5c3.09,3.34,4.64,8.3,4.64,14.89v53.34c0,7.73.65,14.22,1.95,19.47,1.3,5.25,3.64,9.36,7.02,12.33,3.38,2.97,7.95,4.46,13.73,4.46s10.9-1.67,15.87-5c4.96-3.34,8.59-7.69,10.87-13.06,1.87-4.72,2.81-15.05,2.81-31.01v-40.53c0-6.59,1.54-11.55,4.64-14.89,3.09-3.34,7.12-5,12.09-5s8.95,1.65,11.96,4.94c3.01,3.3,4.52,8.28,4.52,14.95v96.56c0,6.35-1.45,11.11-4.33,14.28-2.89,3.17-6.61,4.76-11.17,4.76s-8.32-1.65-11.29-4.94c-2.97-3.3-4.46-7.91-4.46-13.85Z"
                        />
                        <path
                            className="logo-text-1"
                            d="m1512.21,221.19v4.03c5.86-7.73,12.27-13.41,19.23-17.03,6.96-3.62,14.95-5.43,23.99-5.43s16.64,1.91,23.56,5.74c6.92,3.83,12.08,9.24,15.5,16.24,2.2,4.07,3.62,8.46,4.27,13.18.65,4.72.98,10.74.98,18.07v62.01c0,6.67-1.53,11.72-4.58,15.14-3.05,3.42-7.02,5.13-11.9,5.13s-8.99-1.75-12.08-5.25c-3.09-3.5-4.64-8.5-4.64-15.01v-55.54c0-10.99-1.53-19.39-4.58-25.21-3.05-5.82-9.14-8.73-18.25-8.73-5.94,0-11.35,1.77-16.24,5.31s-8.46,8.4-10.74,14.59c-1.63,4.96-2.44,14.24-2.44,27.83v41.75c0,6.76-1.57,11.82-4.7,15.2-3.13,3.38-7.18,5.07-12.15,5.07s-8.75-1.75-11.84-5.25c-3.09-3.5-4.64-8.5-4.64-15.01v-96.31c0-6.35,1.38-11.09,4.15-14.22,2.77-3.13,6.55-4.7,11.35-4.7,2.93,0,5.57.69,7.93,2.08,2.36,1.38,4.25,3.46,5.68,6.23,1.42,2.77,2.14,6.15,2.14,10.13Z"
                        />
                        <path
                            className="logo-text-1"
                            d="m1755.49,227.17v96.8c0,11.07-1.18,20.59-3.54,28.56-2.36,7.97-6.15,14.57-11.35,19.78-5.21,5.21-12.02,9.07-20.45,11.6-8.42,2.52-18.9,3.78-31.43,3.78-11.47,0-21.73-1.61-30.76-4.82-9.03-3.22-15.99-7.37-20.87-12.45-4.88-5.09-7.32-10.31-7.32-15.69,0-4.07,1.38-7.39,4.15-9.95,2.77-2.56,6.1-3.84,10.01-3.84,4.88,0,9.16,2.16,12.82,6.47,1.79,2.2,3.64,4.41,5.55,6.65,1.91,2.24,4.03,4.15,6.35,5.74,2.32,1.59,5.11,2.77,8.36,3.54,3.25.77,7,1.16,11.23,1.16,8.62,0,15.32-1.2,20.08-3.6,4.76-2.4,8.1-5.76,10.01-10.07,1.91-4.31,3.03-8.93,3.36-13.86.32-4.92.57-12.84.73-23.74-5.13,7.16-11.05,12.62-17.76,16.36-6.71,3.74-14.71,5.62-23.99,5.62-11.15,0-20.89-2.85-29.24-8.54-8.34-5.7-14.75-13.67-19.23-23.93-4.48-10.25-6.71-22.09-6.71-35.52,0-10.01,1.36-19.04,4.09-27.1,2.73-8.06,6.61-14.85,11.66-20.39,5.04-5.53,10.86-9.7,17.46-12.51s13.83-4.21,21.73-4.21c9.44,0,17.62,1.81,24.54,5.43,6.92,3.62,13.35,9.3,19.29,17.03v-4.52c0-5.78,1.42-10.25,4.27-13.43,2.85-3.17,6.51-4.76,10.99-4.76,6.43,0,10.7,2.1,12.82,6.29,2.12,4.19,3.17,10.23,3.17,18.13Zm-96.56,42.24c0,13.51,2.95,23.72,8.85,30.64,5.9,6.92,13.53,10.38,22.89,10.38,5.53,0,10.76-1.48,15.69-4.46,4.92-2.97,8.93-7.45,12.02-13.43,3.09-5.98,4.64-13.24,4.64-21.79,0-13.59-2.99-24.17-8.97-31.74-5.98-7.57-13.86-11.35-23.62-11.35s-17.15,3.62-22.89,10.86c-5.74,7.24-8.61,17.54-8.61,30.88Z"
                        />
                        <path
                            className="logo-text-1"
                            d="m1875.98,278.68h-65.19c.08,7.57,1.61,14.24,4.58,20.02,2.97,5.78,6.92,10.13,11.84,13.06,4.92,2.93,10.35,4.39,16.3,4.39,3.99,0,7.63-.47,10.92-1.4,3.3-.93,6.49-2.4,9.58-4.39,3.09-1.99,5.94-4.13,8.54-6.41,2.6-2.28,5.98-5.37,10.13-9.28,1.71-1.46,4.15-2.2,7.32-2.2,3.42,0,6.18.94,8.3,2.81,2.12,1.87,3.17,4.52,3.17,7.93,0,3.01-1.18,6.53-3.54,10.56-2.36,4.03-5.92,7.89-10.68,11.6-4.76,3.7-10.74,6.78-17.95,9.22-7.2,2.44-15.48,3.66-24.84,3.66-21.4,0-38.05-6.1-49.93-18.31-11.88-12.21-17.82-28.77-17.82-49.68,0-9.85,1.46-18.98,4.39-27.4s7.2-15.64,12.82-21.67c5.62-6.02,12.53-10.64,20.75-13.85,8.22-3.21,17.33-4.82,27.34-4.82,13.02,0,24.19,2.75,33.51,8.24,9.32,5.49,16.3,12.59,20.93,21.3,4.64,8.71,6.96,17.58,6.96,26.61,0,8.38-2.4,13.81-7.2,16.3-4.8,2.48-11.56,3.72-20.26,3.72Zm-65.19-18.92h60.42c-.81-11.39-3.89-19.92-9.22-25.57-5.33-5.66-12.35-8.48-21.06-8.48s-15.12,2.87-20.45,8.61-8.57,14.22-9.7,25.45Z"
                        />
                    </g>
                    <path
                        className="logo-text-2"
                        d="m316.98,273.17l-117.33-.07c.14,13.62,2.88,25.64,8.22,36.04,5.34,10.41,12.44,18.25,21.3,23.52,8.86,5.28,18.63,7.92,29.33,7.93,7.17,0,13.73-.83,19.67-2.52,5.93-1.68,11.68-4.31,17.25-7.9,5.57-3.58,10.7-7.43,15.39-11.53,4.69-4.1,10.77-9.66,18.25-16.69,3.08-2.63,7.47-3.95,13.19-3.95,6.15,0,11.13,1.69,14.94,5.06,3.81,3.37,5.71,8.13,5.7,14.29,0,5.42-2.13,11.75-6.38,19-4.25,7.25-10.67,14.2-19.24,20.86-8.57,6.66-19.34,12.18-32.31,16.57-12.97,4.39-27.87,6.58-44.72,6.57-38.53-.02-68.48-11.03-89.85-33.01-21.38-21.99-32.05-51.8-32.03-89.45.01-17.72,2.66-34.17,7.94-49.32,5.28-15.16,12.98-28.15,23.09-38.99,10.11-10.83,22.57-19.14,37.37-24.92,14.8-5.78,31.21-8.66,49.22-8.65,23.43.01,43.54,4.97,60.3,14.87,16.77,9.9,29.32,22.69,37.66,38.36,8.34,15.68,12.5,31.65,12.5,47.91,0,15.09-4.34,24.86-12.98,29.33-8.65,4.47-20.81,6.69-36.48,6.68Zm-117.31-34.13l108.76.06c-1.45-20.51-6.98-35.85-16.56-46.04-9.59-10.19-22.22-15.28-37.89-15.29-14.94,0-27.21,5.15-36.81,15.47-9.6,10.32-15.43,25.59-17.49,45.8Z"
                    />
                    <path
                        className="logo-text-3"
                        d="m419.28,398.2l-147.62,85.23c-10.08,5.82-22.5,5.82-32.58,0l-147.62-85.23m399.28-224.37c0-15.2-8.11-29.24-21.27-36.84L276.73,25.7c-13.16-7.6-29.38-7.6-42.54,0L41.43,136.99c-13.16,7.6-21.27,21.64-21.27,36.84m-.16-.66c0,15.2,8.11,29.24,21.27,36.84l36.72,21.2m354.62,0l36.72-21.2c13.16-7.6,21.27-21.64,21.27-36.84"
                    />
                    <text />
                </svg>
            );
        case "checkmark":
            return (
                <svg
                    {...defaultParams}
                    id="Ebene_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 506.21 509.14"
                >
                    <path
                        d="m50,282l177.03,177.03M456.21,50l-228.17,409.14"
                        className={"svgCheckmark"}
                    />
                </svg>
            );
        case "simple-graphic":
            return (
                <svg
                    {...defaultParams}
                    id="uuid-388a210e-a7ad-487e-a6a6-7bb9566ca8aa"
                    data-name="Ebene 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 798.73 258.87"
                >
                    <path
                        className="simple-graphic-1"
                        d="m432.45,139.27l-59.91-.03c.07,6.96,1.47,13.09,4.2,18.4,2.73,5.31,6.35,9.32,10.88,12.01,4.52,2.7,9.52,4.04,14.98,4.05,3.66,0,7.01-.42,10.04-1.28,3.03-.86,5.96-2.2,8.81-4.03,2.84-1.83,5.46-3.79,7.86-5.88,2.39-2.09,5.5-4.93,9.32-8.52,1.57-1.35,3.82-2.02,6.73-2.02,3.14,0,5.68.86,7.63,2.58,1.94,1.72,2.92,4.15,2.91,7.29,0,2.77-1.09,6-3.26,9.7-2.17,3.7-5.45,7.25-9.82,10.65-4.38,3.4-9.88,6.22-16.5,8.46-6.62,2.24-14.23,3.36-22.83,3.35-19.67-.01-34.97-5.63-45.88-16.86-10.92-11.23-16.37-26.45-16.35-45.67,0-9.05,1.36-17.44,4.05-25.18,2.7-7.74,6.63-14.38,11.79-19.91,5.16-5.53,11.52-9.77,19.08-12.72,7.56-2.95,15.94-4.42,25.13-4.42,11.97,0,22.23,2.54,30.79,7.59,8.56,5.05,14.97,11.58,19.23,19.59,4.26,8.01,6.38,16.16,6.38,24.46,0,7.7-2.21,12.7-6.63,14.97-4.42,2.28-10.62,3.42-18.63,3.41Zm-59.9-17.42l55.54.03c-.74-10.47-3.56-18.31-8.46-23.51-4.9-5.2-11.35-7.8-19.35-7.81-7.63,0-13.9,2.63-18.8,7.9-4.9,5.27-7.88,13.07-8.93,23.39Z"
                    />
                    <path
                        className="simple-graphic-2"
                        d="m484.69,203.12l-75.38,43.52c-5.15,2.97-11.49,2.97-16.64,0l-75.38-43.52m203.88-114.57c0-7.76-4.14-14.93-10.86-18.81l-98.42-56.83c-6.72-3.88-15-3.88-21.72,0l-98.42,56.83c-6.72,3.88-10.86,11.05-10.86,18.81m-.08-.34c0,7.76,4.14,14.93,10.86,18.81l18.75,10.82m181.07,0l18.75-10.82c6.72-3.88,10.86-11.05,10.86-18.81"
                    />
                    <text />
                    <path
                        className="simple-graphic-3"
                        d="m790.14,105.31l-39.14,48.74-20.9-66.16,60.03,17.42Zm-229.07,55.63c71.84-10.52,133.5-26.03,182.93-41.19m-702,6c52.76,15.2,119.95,30.75,198.81,39.92"
                    />
                </svg>
            );
        case "complex-graphic":
            return (
                <svg
                    {...defaultParams}
                    id="uuid-9098db44-b95e-4261-8f73-9c361b693ad6"
                    data-name="Ebene 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 814.55 463.02"
                >
                    <path
                        className="complex-graphic-1"
                        d="m.58,236.71c40.39,4.71,99.04,4.72,142-31,49.2-40.91,30.4-89.25,78-137C292.12-3.05,419.42,21.04,441.58,25.71c36.79,7.75,110.36,23.24,152,88,50.91,79.18,39.77,209.75-43,264-57.08,37.41-156.98,44.26-199-15-38.66-54.53-12.45-142.68,34-178,26.62-20.24,40.59-8.46,135-41,56.94-19.63,75.47-32.05,86-52,10.62-20.13,15.33-52.17,0-71-21.43-26.32-72.43-15.03-141,1-83.77,19.59-125.66,29.38-155,61-38.65,41.64-71.55,123.36-31,196,33.92,60.76,106.29,92,174,78,49.69-10.27,99.39-41.75,117.26-83.68,5.47-12.84,6.63-23.27,6.74-30.32.47-30.66-17.64-65.91-43-74-41.1-13.11-88.58,41.79-100,55-67.9,78.51-38.84,150.81-85,176-46.12,25.17-144.83-8.98-165-82-20.55-74.38,51.72-148.07,114-159,84.6-14.85,166.64,83.3,177,96,35.06,42.99,39.78,75.91,76,87,33.28,10.19,76-3.29,95-32,35.78-54.07-22.93-146.6-66-148-19.53-.64-40.62,25.9-82,79-4.17,5.35-4.73,6.83-28.96,41.27-20.98,29.82-31.47,44.72-33.04,46.73-4.73,6.06-52.68,67.54-111,60-55.28-7.15-101.75-73.95-89-114,11.49-36.11,64.41-29.39,165-76,43.74-20.27,158.96-73.65,153-117-5.86-42.6-128.66-74.83-225.2-44.18-32.37,10.28-53.84,17.09-63.8,37.18-24.62,49.65,58.65,104.32,142,266,40.96,79.45,45.12,113.33,72,117,47.15,6.44,120.73-86.02,112-174-9.4-94.72-114.24-184.71-212-160-102.92,26.02-122.82,160.17-124.1,169.85-2.68,20.15-8.62,64.77,12.1,77.15,26.09,15.59,72.46-32.99,154-92,153.25-110.91,237.71-118.97,234-157-4.44-45.56-130.68-85.52-158-53-34.45,41,117.18,162.96,77,254-29.96,67.88-159.45,102.5-255,57-81.03-38.59-138.82-135.35-117-199,19-55.41,89.92-61.21,89-102-.87-38.61-65.5-81.58-99-66-39.06,18.16-40,117.88-5,139,31.1,18.77,71.64-35.95,187-57,45.34-8.27,72.15-12.78,99,1,55.83,28.66,72.31,116.08,61,179-17.32,96.37-109.65,189.99-171,171-53.27-16.49-88.13-119.44-56-179,40.46-74.98,172.82-54.72,180-102,5.02-33.05-54.44-77.38-75-66-33.02,18.27,30.8,182.22,15,188-15.61,5.71-65.38-158.87-113-154-42.21,4.31-83.56,141.83-40,180,26.99,23.64,79.71,3.15,165-30,88.81-34.52,103.69-85.08,156-79,33.66,3.91,42.64,23.92,95,33,33.45,5.8,62.27,3.27,82,0"
                    />
                    <polygon
                        className="complex-graphic-2"
                        points="805.76 229.62 762.49 274.74 747.49 207 805.76 229.62"
                    />
                </svg>
            );
        case "show-password":
            return (
                <svg
                    id="uuid-1e9e23cf-9c45-4ec6-bd20-a902021fb390"
                    data-name="Ebene 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    {...defaultParams}
                >
                    <path
                        className="show-password-1"
                        d="m43.29,255.81c.05-61.63,115.05-120.78,212.71-120.82,97.66-.03,212.63,59.04,212.71,120.81.07,61.28-112.91,119.8-208.56,121.18-99.95,1.44-216.91-59-216.85-121.18Z"
                    />
                    <circle
                        className="show-password-2"
                        cx="256"
                        cy="256"
                        r="56"
                    />
                </svg>
            );
        case "hide-password":
            return (
                <svg
                    id="uuid-13743c0d-d7f2-41ad-8111-78fdbf6b8846"
                    data-name="Ebene 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    {...defaultParams}
                >
                    <path
                        className="hide-password-1"
                        d="m207.37,283.79c-4.69-8.19-7.37-17.68-7.37-27.79,0-30.93,25.07-56,56-56,10.07,0,19.52,2.66,27.69,7.31"
                    />
                    <path
                        className="hide-password-2"
                        d="m139.11,352.22c-54.52-23.1-95.85-59.45-95.82-96.42.05-61.63,115.05-120.78,212.71-120.82,28.42,0,58.31,4.99,86.41,13.6m-145.42,221.85c20.99,4.48,42.44,6.85,63.16,6.55,95.65-1.38,208.64-59.9,208.56-121.18-.04-31.13-29.25-61.57-70.71-84.1m-142,140.3c30.93,0,56-25.07,56-56m86.15-163.15L86.57,404.43m225.43-148.43l-56,56"
                    />
                </svg>
            );
        case "logo-notext":
            return (
                <svg
                    id="Ebene_1"
                    data-name="Ebene 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        className="logo-notext1"
                        d="m419.91,400.2l-147.62,85.23c-10.08,5.82-22.5,5.82-32.58,0l-147.62-85.23"
                    />
                    <path
                        className="logo-notext2"
                        d="m317.6,275.17l-117.33-.07c.14,13.62,2.88,25.64,8.22,36.04,5.34,10.41,12.44,18.25,21.3,23.52,8.86,5.28,18.63,7.92,29.33,7.93,7.17,0,13.73-.83,19.67-2.52,5.93-1.68,11.68-4.31,17.25-7.9,5.57-3.58,10.7-7.43,15.39-11.53,4.69-4.1,10.77-9.66,18.25-16.69,3.08-2.63,7.47-3.95,13.19-3.95,6.15,0,11.13,1.69,14.94,5.06,3.81,3.37,5.71,8.13,5.7,14.29,0,5.42-2.13,11.75-6.38,19-4.25,7.25-10.67,14.2-19.24,20.86-8.57,6.66-19.34,12.18-32.31,16.57-12.97,4.39-27.87,6.58-44.72,6.57-38.53-.02-68.48-11.03-89.85-33.01-21.38-21.99-32.05-51.8-32.03-89.45.01-17.72,2.66-34.17,7.94-49.32,5.28-15.16,12.98-28.15,23.09-38.99,10.11-10.83,22.57-19.14,37.37-24.92,14.8-5.78,31.21-8.66,49.22-8.65,23.44.01,43.54,4.97,60.31,14.87,16.77,9.9,29.32,22.69,37.66,38.36,8.34,15.68,12.5,31.65,12.5,47.91,0,15.09-4.34,24.86-12.98,29.33-8.65,4.47-20.81,6.69-36.48,6.68Zm-117.31-34.12l108.76.06c-1.45-20.51-6.98-35.85-16.56-46.04-9.59-10.19-22.22-15.28-37.89-15.29-14.94,0-27.21,5.15-36.81,15.47-9.6,10.32-15.43,25.59-17.49,45.8Z"
                    />
                    <path
                        className="logo-notext1"
                        d="m20.78,175.83c0-15.2,8.11-29.24,21.27-36.84L234.81,27.7c13.16-7.6,29.38-7.6,42.54,0l192.75,111.29c13.16,7.6,21.27,21.64,21.27,36.84m-470.76-.66c0,15.2,8.11,29.24,21.27,36.84l36.72,21.2m354.62,0l36.72-21.2c13.16-7.6,21.27-21.64,21.27-36.84"
                    />
                    <text />
                </svg>
            );
    }
}
