import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faGears, faLaptopCode, faMicrochip, faGlobe, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import { GradientText } from "../components/GradientText";

export const ChartColumnIcon = () => { //ANALYSYS
  return (
    <GradientText className="purple-teal">
      <div className="rounded-full bg-gradient-to-br from-purple-600 to-teal-600 p-4 mb-3">
        <FontAwesomeIcon icon={faChartColumn} className="w-6 h-6 text-white" />
      </div>
  </GradientText>
  );
};

export const GearsIcon = () => { 
  return (
    <GradientText className="purple-teal">
  <div className="rounded-full bg-gradient-to-br from-purple-600 to-teal-600 p-3 mb-4">
    <FontAwesomeIcon icon={faGears} className="w-7 h-7 text-white" />
  </div>
    </GradientText>
  );
};

export const LaptopCodeIcon = () => { //CODE
  return (
    <GradientText className="purple-teal">
    <div className="rounded-full bg-gradient-to-br from-purple-600 to-teal-600 p-3 mb-3">
    <FontAwesomeIcon icon={faLaptopCode} className="w-8 h-8 text-white" />
  </div>
    </GradientText>
  );
};

export const DatabaseIcon = () => { //DB
  return (
    <GradientText className="purple-teal">
    <div className="rounded-full bg-gradient-to-br from-purple-600 to-teal-600 p-4 mb-3">
    <FontAwesomeIcon icon={faMicrochip} className="w-6 h-6 text-white" />
  </div>
    </GradientText>

  );
};

export const GlobeIcon = () => {
  return (
    <GradientText className="purple-teal">
    <div className="rounded-full bg-gradient-to-br from-purple-600 to-teal-600 p-4 mb-3">
      <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 text-white" />
    </div>
      </GradientText>
  );
};

export const BriefcaseIcon = () => {
  return (
    <GradientText className="purple-teal">
    <div className="rounded-full bg-gradient-to-br from-purple-600 to-teal-600 p-4 mb-3">
      <FontAwesomeIcon icon={faBriefcase} className="w-6 h-6 text-white" />
    </div>
      </GradientText>
  );
};
