import FranchiseStats from '@/components/franchise/FranchiseStats';
import VisionMoto from '@/components/sections/VisionMoto';
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

            {/* STATS & HISTORY SECTION */}
            <FranchiseStats />

            {/* VISION & MOTO SECTION */}
            <VisionMoto />

            {/* SYARAT KEMITRAAN SECTION */}
            <FranchiseRequirements />

            {/* GALLERY & INVESTMENT SECTION */}
            <FranchiseGalleryAndInvestment />

            {/* BENEFITS LIST SECTION */}
            <FranchiseBenefits />

            {/* FINAL CTA SECTION */}
            <FranchiseCTA />
        </div>
    );
}

