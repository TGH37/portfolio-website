import { MouseEvent, useEffect, useRef } from 'react';
import useBreakpoint from '../hooks/useBreakpoint';
import styles from '../styles/css/misc.module.css';

interface Props {
};

function SVGMask(props: Props) {
    const {} = props;
    const svgRef = useRef(null);
    const {queryMatch: mediaBreakpoints} = useBreakpoint();

    const handleMouseEnter = (event: MouseEvent) => {
        const { target } = event;
        const targetElement = target as SVGElement;
        targetElement.style.opacity = "0";

    };
    const handleMouseLeave = (event: MouseEvent) => {
        const { target } = event;
        const targetElement = target as SVGElement;
        targetElement.style.opacity = "1";
    };

    useEffect(() => {
        if(!svgRef.current) return;
        const SVGElement = svgRef.current;

        if(mediaBreakpoints.md) {
            SVGElement.addEventListener("mouseenter", handleMouseEnter, false);
            SVGElement.addEventListener("mouseleave", handleMouseLeave, false);
        } 
        return (() => {
            SVGElement.removeEventListener("mouseenter", handleMouseEnter);
          SVGElement.removeEventListener("mouseleave", handleMouseLeave);
        })
      }, [mediaBreakpoints.md]);

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1024" 
            height="1121" 
            viewBox="0 0 1024 1121"
            ref={svgRef}
            className={styles.svgMask}
        >
            <path d="M0,560.5V0H1024V1121H0ZM466.363,787.966c1.935-1.228,1.866-2.783-.306-6.965-2.569-4.947-2.374-5.771,2.406-10.15l5.2-4.766-1.352,5.625c-.743,3.094-.724,5.625.044,5.625,2.03,0,21.363-12.25,27.354-17.331a64.154,64.154,0,0,1,11.264-7.314c8.629-4.172,70.255-65.524,67.059-66.761-1.415-.548-2.052-1.838-1.415-2.867,2.774-4.483-3.364-1.246-11,5.8-4.571,4.219-11.492,10.269-15.381,13.445-6.615,5.4-9.743,8.106-21.346,18.448-8.528,7.6-4.7,1.2,6.144-10.274,11.117-11.764,36.485-33.165,44.2-37.29,2.418-1.292,5.811-5.084,7.542-8.426,2.715-5.245,4.3-6.076,11.576-6.076,11.515,0,34.791,7.136,50.856,15.592,7.322,3.854,23.679,15.27,36.35,25.369s23.943,18.362,25.049,18.362c5.467,0,4.759-30.191-1.267-53.99-5.2-20.539-41.954-89.361-61.769-115.664-7.647-10.151-6.357-19.674,6.386-47.123,2.335-5.03,4.122-10.784,3.971-12.785s.431-3.639,1.292-3.639,2.7-6.134,4.081-13.632,3.8-16.7,5.37-20.456c1.7-4.064,2.02-6.825.791-6.825-1.135,0-1.458-.98-.716-2.179.885-1.43,2.657-1,5.158,1.265,11.057,9.994,21.712-6.271,23.673-36.136.865-13.171,2.473-21.33,5.118-25.97,5.02-8.8,4.808-10.905-.46-4.582l-4.181,5.018,1.369-20.36c.753-11.2,1.48-21.915,1.616-23.816.309-4.324,7.429-6.427,8.89-2.626.593,1.543.767,8.751.387,16.017s0,12.782.845,12.257c2.33-1.448,1.836-27.882-.655-35.02q-4.091-11.721-13.425-5.6c-4.938,3.232-5.924,5.708-8.56,21.5-3.146,18.847-5.523,6.654-5.782-29.661-.608-85.384-1.735-96.745-11.776-118.646-4.137-9.024-6.814-11.524-22.738-21.232-18.857-11.5-35.427-17.4-40.255-14.354-1.536.971-5.683,1.237-9.215.592-3.573-.652-7.009-.223-7.746.967s-2.828,1.563-4.667.859c-2.414-.925-2.877-.528-1.666,1.428,1.069,1.727.881,2.219-.516,1.356-3.852-2.378-13.565,2.735-21.457,11.294-4.211,4.567-7.152,9.12-6.535,10.117s.091,1.813-1.168,1.813-1.72.921-1.024,2.046.29,2.046-.9,2.046a2.174,2.174,0,0,0-2.169,2.166c0,1.191,1.064,1.51,2.364.707,1.465-.9,1.809-.561.9.9a5.886,5.886,0,0,1-4.55,2.362c-2.157,0-2.7,1.234-1.789,4.091.746,2.347.368,4.091-.886,4.091-4,0-2.257,3.793,2.422,5.279,4.479,1.422,4.493,1.513.512,3.235-3.342,1.445-3.037,1.626,1.655.981,4.236-.582,5.467-.051,4.672,2.017-.624,1.624.24,2.807,2.05,2.807,1.721,0,2.71-.69,2.2-1.534s.288-2.658,1.776-4.031c2.13-1.966,2.888-1.966,3.56,0,.47,1.373-.986,4.108-3.235,6.077s-3.211,3.58-2.137,3.58,3.058-1.1,4.409-2.455c1.794-1.791,2.458-1.819,2.458-.1,0,1.294-1.613,3.389-3.584,4.655-3.354,2.154-3.345,2.227.148,1.132,6.549-2.053,19.874,7.695,18.131,13.263-.506,1.617-2.728,4.671-4.937,6.787-2.917,2.794-3.343,4.262-1.556,5.365,1.707,1.054,1.853,2.695.478,5.359-1.09,2.112-1.57,4.991-1.065,6.4s-.541,2.557-2.325,2.557c-3.428,0-4.2,3.509-1.655,7.509.839,1.317,4.188,3.062,7.442,3.878,4.756,1.192,5.579.923,4.194-1.372s-1.137-2.382,1.325-.394a14.2,14.2,0,0,0,7.049,2.649c2.2.1,12.757.512,23.458.909,31.513,1.168,34.87,2.087,42.974,11.769,3.924,4.688,7.149,9.967,7.168,11.732.04,3.733-3.814,8.324-6.988,8.324a2.026,2.026,0,0,0-2.194,1.779c0,.979-1.992,1.669-4.426,1.534s-4.858,1.034-5.386,2.6c-.543,1.607-.033,2.27,1.173,1.526,2.817-1.739,5.3,13.123,3.529,21.159-.748,3.4-2.3,6.181-3.44,6.181s-4.527,1.74-7.517,3.866c-5.306,3.774-6.6,4.316-10.317,4.316-.995,0-2.266,1.743-2.823,3.874-.627,2.395-3.651,4.43-7.919,5.33-10.987,2.316-20.07,7.209-18.923,10.194,1.685,4.386-1.767,4.933-11.135,1.765C579.2,374.064,566.27,362.375,564,355.246c-.974-3.066-1.63-3.328-2.958-1.181-3.1,5.008-6.456-8.46-5.143-20.628,1.816-16.822,1.623-19.145-1.8-21.642-1.723-1.258-2.532-2.887-1.8-3.619s.34-1.332-.874-1.332-4.558,2.79-7.431,6.2c-7.756,9.207-12.04,27.216-7.551,31.746,3.433,3.465,7.317,29.559,4.4,29.559-3.112,0,.254,19.327,3.99,22.909,6.95,6.662,6.968,26.952.029,31.236-1.208.746-1.991,4.052-1.74,7.347.377,4.947,1.541,6.169,6.678,7.012a69.05,69.05,0,0,0,13.272.523l7.051-.5.277,14.831c.152,8.157-.486,14.831-1.419,14.831s-1.7,1.269-1.7,2.82c0,3.075-10.98,8.457-13.758,6.742-.944-.583-3.866.56-6.493,2.539l-4.776,3.6,13.026,3.707a160.258,160.258,0,0,0,20.717,4.527c6.678.713,7.947.149,9.632-4.277,2.055-5.4,10.325-6.817,10.325-1.769a4.627,4.627,0,0,0,2.947,3.827c1.621.621,3.581,4.044,4.357,7.607a83.7,83.7,0,0,0,3.516,11.591c2.8,6.788,2.936,10.884.444,12.941-1.334,1.1-1.2,2.038.4,2.689a2.836,2.836,0,0,1,1.42,3.667c-.58,1.509.8,3.145,3.187,3.768,3.105.811,4.212,2.763,4.212,7.429,0,3.481-.922,6.328-2.048,6.328a2.053,2.053,0,0,1-2.048-2.046c0-4.219-4.277-1.836-6.315,3.519-1.682,4.418-1.46,6.045,1.075,7.9,1.756,1.283,3.193,3.381,3.193,4.664,0,3.291,3.127,2.894,6.185-.786,1.425-1.715,2.961-2.747,3.415-2.295s-1.752,3.567-4.9,6.922c-20.617,21.966-19.634,24.161,2.407,5.376,8.775-7.479,15.6-12.739,15.176-11.689s-4.772,12.916-9.653,26.37c-13.635,37.583-29.768,68.441-35.782,68.441-.835,0,.055-2.531,1.977-5.625,5.841-9.4-1.193-1.73-8.158,8.9-3.579,5.46-13.879,15.731-22.891,22.824s-18.916,15.225-22.011,18.071-6.551,4.6-7.68,3.908-2.053.168-2.053,1.922c0,1.98-1.817,3.189-4.793,3.189-3.115,0-6.529,2.437-9.752,6.961a247.151,247.151,0,0,1-16.2,18.967c-9.078,9.7-29.815,33.758-32.116,37.264-.821,1.252-8.04-7.667-18.864-23.3-5.451-7.876-18.031-22.6-27.956-32.73-32.878-33.547-32.6-33.134-37.82-55.548-2.581-11.077-6.28-24.793-8.221-30.479s-4.178-16.8-4.973-24.705c-1.953-19.422-3.194-20.981-10.794-13.56-5.235,5.112-6.661,5.613-9.685,3.4-3.78-2.761-9.292-1.758-9.292,1.689,0,1.143,1.532.814,3.405-.73,2.913-2.4,3.261-2.372,2.408.2-.548,1.657-3.057,3.5-5.574,4.091s-4.292,1.834-3.944,2.757-.98,2.58-2.951,3.682-3.584,3.338-3.584,4.97-.922,2.967-2.048,2.967-2.048,1.381-2.048,3.068-.893,3.068-1.984,3.068-1.4,1.532-.676,3.4c.95,2.472.565,2.945-1.4,1.729-1.765-1.089-2.222-.882-1.309.593,2.036,3.291-.808,12.9-3.353,11.331-1.394-.861-1.515-.318-.345,1.548a11.262,11.262,0,0,1,1.164,6.735c-.351,2.124.594,4.641,2.1,5.594,1.939,1.227,2.011,1.742.249,1.764-1.368.016-3.525,1.967-4.793,4.334-2.213,4.13-1.972,4.246,6.029,2.9a36.729,36.729,0,0,1,15.3.89c5.923,1.953,7.368,3.739,9.65,11.935,2.211,7.941,6.343,13.3,23.465,30.455l20.782,20.816-.952,11.467c-.992,11.954,1.927,18.172,9.564,20.369,38.9,11.191,45.2,13.848,53.886,22.739,8.714,8.914,12.6,10.582,17.455,7.5Zm-69.43-37.294c-4.151-2.19-8.181-5.006-8.956-6.259s.984-.711,3.909,1.2a68.993,68.993,0,0,0,14.076,6.212c6.35,1.981,7.351,2.745,3.638,2.778-2.816.026-8.516-1.745-12.667-3.935ZM569.344,476.63c0-1.125,1.382-2.046,3.072-2.046s3.072.921,3.072,2.046-1.382,2.046-3.072,2.046S569.344,477.755,569.344,476.63Zm17.408-36.821c-.7-1.125-.344-2.046.782-2.046a4.486,4.486,0,0,1,3.314,2.046c.7,1.125.344,2.046-.782,2.046A4.486,4.486,0,0,1,586.752,439.808Zm97.28-15.061c0-1.533,2.765-6.262,6.144-10.509,6.9-8.67,7.056-8.5,3.853,4.208-1.695,6.722-3.294,9.088-6.144,9.088C685.766,427.535,684.032,426.28,684.032,424.748ZM563.2,421.277c0-1.191.922-1.6,2.048-.9s2.048,1.67,2.048,2.166-.922.9-2.048.9A2.116,2.116,0,0,1,563.2,421.277Zm116.278-12.094c3.7-3.071,4.421-5.235,3.495-10.486a40.085,40.085,0,0,0-1.983-7.934c-.449-.725.187-5.264,1.412-10.086l2.228-8.768,3.727,7.868c7.117,15.024,3.135,30.272-8.449,32.359l-5.093.917ZM582.656,272.068c.7-1.125,1.672-2.046,2.169-2.046s.9.921.9,2.046a2.116,2.116,0,0,1-2.169,2.046C582.366,274.114,581.96,273.193,582.656,272.068ZM561.32,734.258c6.751-4.8,25.646-28.519,22.72-28.519-1.06,0-7.334,6.079-13.944,13.509s-13.235,14.794-14.723,16.365C551.4,739.8,554.522,739.093,561.32,734.258ZM595.8,638.234c2.3-4.822,2.257-4.887-.747-1.143-1.752,2.184-3.185,4.869-3.185,5.966C591.872,645.656,592.818,644.5,595.8,638.234Zm-22.364-65.46a2.116,2.116,0,0,0-2.169-2.046c-1.193,0-1.6.921-.9,2.046s1.672,2.046,2.169,2.046S573.44,573.9,573.44,572.774Zm5.145-7.817c-1.627-1.625-5.149,2.065-3.9,4.085.85,1.374,1.906,1.165,2.994-.594C578.6,566.955,579.012,565.384,578.585,564.957Zm20.455-2.411c.7-1.125.29-2.046-.9-2.046a2.116,2.116,0,0,0-2.169,2.046c0,1.125.406,2.046.9,2.046S598.344,563.671,599.04,562.546Zm-24.591-30.709c-.406-.656.108-2.53,1.143-4.164,1.518-2.4,1.888-2.2,1.913,1.018.024,3.021.606,3.415,2.4,1.621,3.605-3.6-1.918-9.337-7.348-7.63a57.313,57.313,0,0,1-7.347,1.773c-8.97,1.272-10.774,6.834-2.524,7.782,8.859,1.018,12.56.892,11.761-.4Zm-.138-14.542c-1.327-2.145-4.967-.423-4.967,2.35,0,1.023,1.377,1.333,3.06.688S574.945,518.32,574.311,517.294Zm-25.447-53.841c0-.5-.922-1.471-2.048-2.166s-2.048-.289-2.048.9a2.116,2.116,0,0,0,2.048,2.166C547.942,464.356,548.864,463.95,548.864,463.454Zm17.408-1.144a4.486,4.486,0,0,0-3.314-2.046c-1.126,0-1.478.921-.782,2.046a4.486,4.486,0,0,0,3.314,2.046C566.616,464.356,566.968,463.435,566.272,462.31Zm56.32-102.281c2.484-1.6,2.19-1.989-1.536-2.014-2.534-.017-4.608.889-4.608,2.014C616.448,362.592,618.621,362.592,622.592,360.029Zm-2.309-11.116c9.4-4.857,11.119-8.148,6.45-12.368-3.914-3.538-4.1-3.47-6.279,2.243a35.97,35.97,0,0,1-5.49,9.475C611.023,352.613,612.718,352.82,620.283,348.913Zm-92.717-69.174c2.282-6.975.989-18.664-2.266-20.483-1.59-.889-2.494-2.742-2.01-4.118,2.036-5.791,2.65-13.754,1.061-13.754-.942,0,.986-6.418,4.285-14.261,5-11.891,5.585-14.924,3.507-18.247-3.506-5.607-11.952-7.009-11.952-1.984,0,2.094-.768,3.808-1.706,3.808-1.995,0-1.761,7.448.3,9.5,2.47,2.467,1.51,4.726-1.516,3.566-2.139-.82-2.622.029-1.8,3.164,1.389,5.307,4.723,7.649,4.723,3.319,0-1.754.945-3.189,2.1-3.189,1.18,0,.658,2.786-1.191,6.357-1.95,3.766-2.772,8.422-2.018,11.422.939,3.739.581,4.713-1.369,3.719-1.453-.74-1-.006,1,1.632,3.05,2.493,3.155,3.166.644,4.128a3.052,3.052,0,0,1-3.995-1.292c-.547-1.343-1.185-.141-1.418,2.672s-.639,7.161-.9,9.663.314,4.059,1.285,3.459,1.906.575,2.078,2.611c.569,6.752.808,7.772,2.423,10.349,2.537,4.048,7.09,2.982,8.735-2.046Zm-13.518-15.974c0-1.191.922-1.6,2.048-.9s2.048,1.67,2.048,2.166-.922.9-2.048.9A2.116,2.116,0,0,1,514.048,263.765Zm20.48-35.678c0-1.688-.893-3.068-1.984-3.068s-1.453,1.381-.8,3.068,1.541,3.068,1.984,3.068.8-1.381.8-3.068Zm-8.192-43.981c0-1.125-1.437-2.046-3.193-2.046s-2.623.921-1.927,2.046a4.392,4.392,0,0,0,3.193,2.046A2,2,0,0,0,526.336,184.106Zm55.3-28.639a2.048,2.048,0,1,0-2.048,2.046A2.053,2.053,0,0,0,581.632,155.468Z"
            />
        </svg>
    );
};

export default SVGMask;
