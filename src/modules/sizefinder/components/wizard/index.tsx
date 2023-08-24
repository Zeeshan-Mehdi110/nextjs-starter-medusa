//@ts-nocheck
import { useState, useEffect } from 'react';
import StepZilla from 'react-stepzilla';
import WelcomeStep from '@modules/sizefinder/components/steps/step1';
import MeasureInputStep from '@modules/sizefinder/components/steps/step2';
import Recomendation from '@modules/sizefinder/components/steps/step4';
import SizeConversionStep from '@modules/sizefinder/components/steps/step5';
import ShoeSizeRecommendations from '@modules/sizefinder/components/steps/step6';
import './wizard.module.css';
import AvatarViewer from '@modules/sizefinder/components/steps/step3';
// import { useRouter } from 'next/router';
const Wizard = () => {
  // const router = useRouter()
  const steps = [
    { name: 'Welcome', component: <WelcomeStep /> },
    { name: 'Measurement Input', component: <MeasureInputStep /> },
    { name: 'Create Avatar', component: <AvatarViewer /> },
    { name: 'Clothing Size Recommendations', component: <Recomendation /> },
    { name: 'Size Conversions', component: <SizeConversionStep /> },
    { name: 'Shoe Size Recommendations', component: <ShoeSizeRecommendations /> },
  ];

  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    const storedStep = window.sessionStorage.getItem('step');
    const initialStep = storedStep ? parseFloat(storedStep) : 0;
    setCurrentStep(initialStep);
  }, []);

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
    window.sessionStorage.setItem('step', step.toString());
        if (step === steps.length - 1) {
          setTimeout(() => {
            // router.push('/products');
          }, 5000);
        }
  }

  return (
    <div className='step-progress mb-3' >
      <StepZilla
        steps={steps}
        showSteps={true}
        stepsNavigation={true}
        prevBtnOnLastStep={false}
        preventEnterSubmission={true}
        startAtStep={currentStep}
        onStepChange={handleStepChange}
      />
    </div>
  );
};

export default Wizard;
