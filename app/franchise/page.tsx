import FranchiseStats from '@/components/franchise/FranchiseStats';
import FranchiseVisionMoto from '@/components/franchise/FranchiseVisionMoto';
import FranchiseRequirements from '@/components/franchise/FranchiseRequirements';
import FranchiseGalleryAndInvestment from '@/components/franchise/FranchiseGalleryAndInvestment';
import FranchiseBenefits from '@/components/franchise/FranchiseBenefits';
import FranchiseHero from '@/components/franchise/FranchiseHero';
import FranchiseCTA from '@/components/franchise/FranchiseCTA';

export default function FranchisePage() {
    return (
        <div className="min-h-screen">
            {/* HERO SECTION */}
            <FranchiseHero />

            {/* STATS SECTION */}
            <FranchiseStats />

            {/* VISION & MOTO SECTION */}
            <FranchiseVisionMoto />

            {/* REQUIREMENTS SECTION */}
            <FranchiseRequirements />

            {/* GALLERY & INVESTMENT SECTION */}
            <FranchiseGalleryAndInvestment />

            {/* BENEFITS SECTION */}
            <FranchiseBenefits />

            {/* CTA SECTION */}
            <FranchiseCTA />
        </div>
    );
}

