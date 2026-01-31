import { Button } from '@/app/components/Button';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ServiceCard } from '@/app/components/ServiceCard';
import { MetricCard } from '@/app/components/MetricCard';
import { LinkCard } from '@/app/components/LinkCard';
import { 
  Droplet, 
  Truck, 
  Factory, 
  Flame, 
  Container,
  Route,
  Building2,
  Shield,
  Users,
  MapPin,
  ArrowRight
} from 'lucide-react';
import heroImage from 'figma:asset/bc51fe585b17a207c3fc04fde8518139976f6f8f.png';
import oldHeroImage from 'figma:asset/0bbccb6bb220989d4021c27c3449509803343db4.png';
import cardImage1 from 'figma:asset/5ed565a729d33d4069d449f1cd412262deb1f8d2.png';
import cardImage2 from 'figma:asset/0c1260bdab630256ee25ed16d5677e793bd4ec8f.png';
import processingUnitImage from 'figma:asset/7471a5b0e7179d2ad1c356cb20a7e1636feab93b.png';
import newProcessingDiagram from 'figma:asset/fdfc56661d0f05fd002af8ba72775b9ac5b5b864.png';
import storageTankImage from 'figma:asset/a6ae651a08c7864a472b1d6a112c2bb765517a2f.png';
import qualityAssuranceImage from 'figma:asset/70849d0ab00f6141969b7aa1ae395dfa4fb6390b.png';
import midstreamEquipmentImage from 'figma:asset/b7c8ccc68bee0a06287040c93321440eae078a38.png';
import upstreamEquipmentImage from 'figma:asset/99ac5638202ef5a041fc84e53ece27743387f42f.png';
import downstreamEquipmentImage from 'figma:asset/0105f9c7053939c3c5ba7d18917f3d7219a612bc.png';
import lpgEquipmentImage from 'figma:asset/59a12c1a8fbdeab3d63bcbb423a877c584f1b9d5.png';
import lubricantsEquipmentImage from 'figma:asset/3d0fc9a91696f201471dc23ad612b848e3a64e03.png';
import logisticsEquipmentImage from 'figma:asset/54f7349cfdfa1834934a3d69ac3572ddf77465fb.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} />
      
      {/* Hero Section - Foodiq-Inspired Typography with Right-Aligned Layout */}
      <section 
        className="relative w-full flex flex-col bg-white md:h-screen md:overflow-hidden"
      >
        {/* Mobile: Natural Stacking | Desktop: Wrapped Hero Image Card */}
        <div className="relative p-4 md:p-6 lg:p-8 md:absolute md:inset-0">
          <div className="bg-white p-6 md:p-10 lg:p-12 rounded-2xl md:h-full flex flex-col justify-center overflow-hidden">
            <div className="w-full md:h-full flex items-center justify-center">
              <img 
                src={heroImage}
                alt="Emadeb Energy Hero Background" 
                className="w-full h-auto md:h-full md:w-full object-contain md:object-cover rounded-lg"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </div>
        </div>

        {/* Headline - Mobile: Below Image | Desktop: Absolute Left */}
        <div className="relative px-6 py-8 md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 md:pl-8 lg:pl-12 max-w-3xl z-10">
          <h1 
            className="text-[42px] md:text-[56px] lg:text-[64px] leading-[0.95] bg-clip-text text-transparent" 
            style={{ 
              backgroundImage: 'linear-gradient(5deg, #01A70E, #FB0138)',
              fontFamily: 'var(--font-brand)',
              fontWeight: 400,
              letterSpacing: '0.06em'
            }}
          >
            Re-Imagined the Future of Energy
          </h1>
        </div>

        {/* Link Cards - Mobile: Below Text | Desktop: Bottom Right Positioned */}
        <div className="relative w-full px-6 pb-8 md:w-auto md:ml-auto md:pr-6 md:pr-12 lg:pr-16 xl:pr-20 md:pl-8 lg:pl-12 md:pb-4 md:pb-6 lg:pb-8 md:mt-auto md:absolute md:bottom-0 md:right-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full md:w-auto md:min-w-[600px] lg:min-w-[700px]">
            <LinkCard 
              title="Infrastructure" 
              backgroundImage={oldHeroImage}
              onClick={() => onNavigate('infrastructure')}
            />
            <LinkCard 
              title="Contact us" 
              backgroundImage="https://images.unsplash.com/photo-1650901161049-5a508b78388d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBjb21wYW55JTIwY29ycG9yYXRlJTIwaGVhZHF1YXJ0ZXJzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5ODA4NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              onClick={() => onNavigate('contact')}
              flipped
            />
          </div>
        </div>
      </section>

      {/* Mission Statement Section - Foodiq Style Layout */}
      <section className="py-24 md:py-40 lg:py-48 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="mb-16 lg:mb-20">
            <div className="mb-8 lg:mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                Energy infrastructure for West Africa
              </h2>
            </div>
            
            <div className="border-t border-border pt-8 lg:pt-12">
              <div className="lg:ml-auto lg:max-w-xl">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  In fragmented energy markets and volatile supply chains, reliable and sustainable petroleum solutions are needed – Emadeb Energy Group's integrated infrastructure is the solution.
                </p>
              </div>
            </div>
          </div>

          {/* Grid Layout - Single Card with Processing Diagram */}
          <div className="grid grid-cols-1 gap-6">
            {/* Full Width Card with Processing Diagram */}
            <div className="bg-white p-10 md:p-12 rounded-2xl min-h-[500px] flex flex-col justify-between">
              <div className="w-full">
                <img 
                  src={newProcessingDiagram}
                  alt="Emadeb Energy Processing Infrastructure Diagram" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Infrastructure Enables Section - Foodiq-Style Grid */}
      <section className="py-24 md:py-40 lg:py-48 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="mb-16 lg:mb-20">
            <div className="mb-8 lg:mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                What Emadeb's infrastructure enables
              </h2>
            </div>
            
            <div className="border-t border-border pt-8 lg:pt-12">
              <div className="lg:ml-auto lg:max-w-xl">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our integrated downstream and midstream operations create a seamless supply chain—from bulk petroleum procurement and strategic storage to retail distribution and last-mile delivery across Nigeria and West Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Grid of Capability Cards - 3x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Card 1 */}
            <div className="bg-foreground text-white p-10 md:p-12 rounded-2xl min-h-[500px] flex flex-col justify-between lg:col-span-2">
              <h3 className="text-3xl md:text-4xl font-normal leading-tight w-full lg:w-1/2">
                Bulk procurement & import
              </h3>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mt-auto w-full lg:w-1/2">
                Direct relationships with international refineries and trading houses ensure consistent petroleum product supply at competitive rates.
              </p>
            </div>

            {/* Card 2 - Strategic Storage Capacity with Background Image */}
            <div 
              className="relative p-10 md:p-12 rounded-2xl min-h-[500px] flex flex-col justify-between overflow-hidden lg:col-span-2"
              style={{
                backgroundImage: `url(${storageTankImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Glassy white overlay with reduced opacity */}
              <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] border-[0.01px] border-black/20"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-normal leading-tight w-full lg:w-1/2 text-foreground">
                  Strategic storage capacity
                </h3>
              </div>
              <div className="relative z-10">
                <p className="text-foreground/70 text-lg md:text-xl leading-relaxed w-full lg:w-1/2">
                  150+ million liters of tank farm capacity providing supply security and market flexibility across multiple product grades.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-foreground text-white p-10 md:p-12 rounded-2xl min-h-[500px] flex flex-col justify-between lg:col-span-2">
              <h3 className="text-3xl md:text-4xl font-normal leading-tight w-full lg:w-1/2">
                Nationwide retail network
              </h3>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mt-auto w-full lg:w-1/2">
                200+ strategically located service stations delivering premium fuel and LPG directly to consumers across Nigeria.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-foreground text-white p-10 md:p-12 rounded-2xl min-h-[500px] flex flex-col justify-between lg:col-span-3">
              <h3 className="text-3xl md:text-4xl font-normal leading-tight w-full lg:w-1/2">
                Integrated logistics fleet
              </h3>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mt-auto w-full lg:w-1/2">
                500+ specialized tankers and trucks with GPS tracking, safety protocols, and optimized routing for reliable delivery.
              </p>
            </div>

            {/* Card 5 */}
            <div 
              className="relative p-10 md:p-12 rounded-2xl min-h-[500px] flex flex-col justify-between overflow-hidden lg:col-span-3"
              style={{
                backgroundImage: `url(${qualityAssuranceImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Glassy white overlay with reduced opacity */}
              <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] border-[0.01px] border-black/20"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-normal leading-tight w-full lg:w-1/2 text-foreground">
                  Quality assurance & compliance
                </h3>
              </div>
              <div className="relative z-10">
                <p className="text-foreground/70 text-lg md:text-xl leading-relaxed w-full lg:w-1/2">
                  Rigorous testing protocols and regulatory compliance ensuring product quality from source to end-user delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-40 lg:py-48 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="mb-16 lg:mb-20">
            <div className="mb-8 lg:mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                Comprehensive Energy Solutions
              </h2>
            </div>
            
            <div className="border-t border-border pt-8 lg:pt-12">
              <div className="lg:ml-auto lg:max-w-xl">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From downstream distribution to upstream exploration, we deliver integrated energy infrastructure across Nigeria and West Africa.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Row 1 - Three equal cards */}
            <div onClick={() => onNavigate('downstream')} className="cursor-pointer lg:col-span-2">
              <ServiceCard
                icon={Droplet}
                title="Downstream"
                description="Comprehensive petroleum product distribution, retail network management, and bulk fuel supply solutions."
                backgroundImage={downstreamEquipmentImage}
              />
            </div>
            <div className="lg:col-span-2">
              <ServiceCard
                icon={Container}
                title="Midstream"
                description="Storage facilities, tank farm operations, and strategic petroleum product handling infrastructure."
                backgroundImage={midstreamEquipmentImage}
              />
            </div>
            <div className="lg:col-span-2">
              <ServiceCard
                icon={Factory}
                title="Upstream"
                description="Exploration, production partnerships, and upstream energy development initiatives."
                backgroundImage={upstreamEquipmentImage}
              />
            </div>
            
            {/* Row 2 - Three equal cards */}
            <div onClick={() => onNavigate('lpg')} className="cursor-pointer lg:col-span-2">
              <ServiceCard
                icon={Flame}
                title="LPG / Gas"
                description="Liquefied petroleum gas distribution, refill stations, and safe domestic energy solutions."
                backgroundImage={lpgEquipmentImage}
              />
            </div>
            <div className="lg:col-span-2">
              <ServiceCard
                icon={Truck}
                title="Lubricants"
                description="Premium lubricant distribution for industrial, commercial, and automotive applications."
                backgroundImage={lubricantsEquipmentImage}
              />
            </div>
            <div onClick={() => onNavigate('logistics')} className="cursor-pointer lg:col-span-2">
              <ServiceCard
                icon={Route}
                title="Logistics"
                description="Strategic haulage services, fleet management, and last-mile delivery infrastructure."
                backgroundImage={logisticsEquipmentImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 lg:py-48 bg-neutral-50">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-border">
            <MetricCard value="25" suffix="+" label="Years of Excellence" />
            <MetricCard value="150M" suffix="L" label="Storage Capacity" />
            <MetricCard value="200" suffix="+" label="Retail Stations" />
            <MetricCard value="500" suffix="+" label="Fleet Vehicles" />
          </div>
        </div>
      </section>

      {/* Foodiq-Style CTA Section - Full Height with Background */}
      <section 
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 py-20"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1593073051382-1550f4c24079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGVuZXJneSUyMGluZnJhc3RydWN0dXJlJTIwcGFydG5lcnNoaXB8ZW58MXx8fHwxNzY5ODIxMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Blur overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
        ></div>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8 text-left md:text-center">
            Collaborate with us and scale energy infrastructure solutions across West Africa
          </h2>

          <div className="flex justify-start md:justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 bg-[--emadeb-red] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[--emadeb-orange] transition-all hover:scale-105 hover:shadow-lg"
            >
              Contact us
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}