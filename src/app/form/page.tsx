"use client"
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ScrollUp from '@/components/ScrollUp';

interface FormData {
    file?: File | null;
    otherFounder: string;
    otherBudget: string;
    // Step 1: Basic info
    fullName: string;
    email: string;
    companyName: string;
    website: string;
    role: string;

    // Step 2: Project details
    founderStage: string;
    brandingGuidelines: string;
    budget: string;

    // Step 3: Additional info
    additionalInfo: string;
    hearAboutUs: string;
}

const StartupApplicationForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0); // 0 = landing, 1-3 = form steps
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        companyName: '',
        website: '',
        role: '',
        founderStage: '',
        brandingGuidelines: '',
        budget: '',
        additionalInfo: '',
        hearAboutUs: '',
        otherFounder: "",
        otherBudget: "",
        file: null,

    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const updateFormData = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const startForm = () => {
        setCurrentStep(1);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white px-6 md:px-24 py-12 mt-24">
                <ScrollUp />

                <div className="max-w-3xl mx-auto">
                    {/* Logo */}
                    <div className="mb-12 ">
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-orange-500 rounded mr-2"></div>
                            <span className="font-semibold text-gray-900">Launchlabs</span>
                        </div>
                    </div>
                    {/* Content */}
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Takk for at du tok kontakt!
                    </h1>

                    <p className="text-orange-600 text-lg mb-6">
                        Vi har mottatt innsendingen din – og vi gleder oss til å lære mer om reisen din.
                    </p>

                    <p className="text-gray-800 leading-relaxed mb-10">
                        Teamet vårt vil gjennomgå opplysningene dine og ta kontakt med deg snart med informasjon
                        om de neste stegene. Enten du er ute etter teknologi, fremdrift eller finansiering, er vi
                        her for å hjelpe deg med å akselerere veien fremover.
                    </p>

                    <p className="text-gray-900 font-semibold mb-2">
                        For spørsmål eller trenger hjelp:
                    </p>

                    <p className="text-gray-800">
                        Tlf: <span className="font-normal">+47 40556333</span>{' '}
                        &nbsp; Epost:{' '}
                        <a href="mailto:contact@launchlabs.no" className="text-orange-600 underline">
                            contact@launchlabs.no
                        </a>
                    </p>
                </div>
            </div>
        );
    }


    // Landing page (Step 0)
    if (currentStep === 0) {
        return (
            <div className="min-h-screen bg-gray-50 mt-24 max-w-7xl ">
                <div className="max-w-2xl mx-auto px-6 py-12">
                    {/* Logo */}
                    {/* <div className="mb-12">
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-orange-500 rounded mr-2"></div>
                            <span className="font-semibold text-gray-900">Launchlabs</span>
                        </div>
                    </div> */}

                    {/* Main Content */}
                    <div className="space-y-8 ">
                        <h1 className="text-4xl font-bold text-orange-500 leading-tight sm:w-xl md:w-4xl mx-auto">
                            Inntaksskjema for oppstartsbedrifter
                        </h1>

                        <div className="text-gray-700 space-y-4 ">
                            <p className='font-bold'>
                               Hos Launchlabs strever vi for å gjøre dristige ideer om til virkelige,
                            &quot;skalerbare bedrifter&quot;. Dette skjemaet hjelper oss å forstå og din bedrift, slik at vi kan skreddersy tjenestene våre til dine eksakte behov.
                            </p>

                            <div className="space-y-1">
                                <p className="text-orange-600 underline cursor-pointer">Vi spesialiserer oss på:</p>
                                <ul className="space-y-2 ml-0">
                                    <li className="text-gray-700">- AI-drevne forretningsløsninger</li>
                                    <li className="text-gray-700">- Utvikling av nett- og mobilapper</li>
                                    <li className="text-gray-700">- Merkevarebygging og støtte til markedet</li>
                                    <li className="text-gray-700">- Investorkontakter og finansieringsveiledning</li>
                                </ul>
                            </div>

                            <p className="text-gray-700">
                                Enten du trenger en prototype, en vekstplan eller investorintroduksjoner – vi er her for å akselerere
                                suksessen din.
                            </p>

                            <div className="space-y-2">
                                <p className="text-orange-600 font-medium">Fullføre skjemaet:</p>
                                <div className="space-y-1">
                                    <p className="text-gray-700">1) Fortell oss litt om deg selv</p>
                                    <p className="text-gray-700">2) Del oppstartsbedriftens visjon og behov</p>
                                    <p className="text-gray-700">3) Send inn og få en bekreftelse Vi gleder oss til å høre fra deg!</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={startForm}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors"
                        >
                            Søke
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 mt-24">

            <div className="max-w-2xl mx-auto px-6 py-8">
                

                {/* Back Button */}
                <button
                    onClick={prevStep}
                    className="flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Tilbake
                </button>

                {/* Form Content */}
                <div className="space-y-6 ">
                    {/* Step 1: Grunnleggende informasjon */}
                    {currentStep === 1 && (
                        <div>
                            <ScrollUp />
                            <h1 className="text-3xl font-bold text-gray-900 mb-8">Grunnleggende informasjon</h1>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Om deg <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.fullName}
                                        onChange={(e) => updateFormData('fullName', e.target.value)}
                                        placeholder="Fullt navn"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                    />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => updateFormData('email', e.target.value)}
                                        placeholder="E-post"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors mt-3"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Om bedriften din <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.companyName}
                                        onChange={(e) => updateFormData('companyName', e.target.value)}
                                        placeholder="Firmanavn"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                    />
                                    <input
                                        type="url"
                                        value={formData.website}
                                        onChange={(e) => updateFormData('website', e.target.value)}
                                        placeholder="Selskapets nettsted"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors mt-3"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Din rolle <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={formData.role}
                                        onChange={(e) => updateFormData('role', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white"
                                    >
                                        <option value=""></option>
                                        <option value="ceo">CEO/Grunder</option>
                                        <option value="cto">CTO</option>
                                        <option value="co-founder">Medgrunder</option>
                                        <option value="other">Annet</option>
                                    </select>
                                </div>

                                <button
                                    onClick={nextStep}
                                    disabled={!formData.fullName || !formData.email || !formData.companyName || !formData.role}
                                    className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors"
                                >
                                    Søke
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Prosjektdetaljer */}
                    {currentStep === 2 && (
                        <div>
                            <ScrollUp />
                            <h1 className="text-3xl font-bold text-gray-900 mb-8">Prosjektdetaljer</h1>

                            <div className="space-y-10">
                                {/* Gründerreise */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-4">
                                        Hvor er du i din gründerreise? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="space-y-3">
                                        {[
                                            { value: 'pre-launch', label: 'Førlansering (bygger av produktet vårt)' },
                                            { value: 'early-stage', label: 'Tidlig fase (lansert, men optimaliserer)' },
                                            { value: 'growth', label: 'Vekstfase (skalering av brukerbasen vår)' },
                                            { value: 'pivot', label: 'Etter pivot (endre retning)' },
                                            { value: 'other', label: 'Annen' },
                                        ].map((option, index) => {
                                            const isSelected = formData.founderStage === option.value;
                                            return (
                                                <div key={option.value}>
                                                    <label
                                                        className={`flex items-center cursor-pointer border rounded-md px-3 py-2 transition-colors ${isSelected ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-gray-400'
                                                            }`}
                                                    >
                                                        <span
                                                            className={`flex items-center justify-center w-6 h-6 text-sm font-bold rounded mr-3 border ${isSelected ? 'bg-orange-500 text-white border-orange-500' : 'text-orange-500 border-orange-500'
                                                                }`}
                                                        >
                                                            {String.fromCharCode(65 + index)}
                                                        </span>
                                                        <input
                                                            type="radio"
                                                            name="founderStage"
                                                            value={option.value}
                                                            checked={isSelected}
                                                            onChange={(e) => updateFormData('founderStage', e.target.value)}
                                                            className="hidden"
                                                        />
                                                        <span className="text-gray-700">{option.label}</span>
                                                    </label>

                                                    {isSelected && option.value === 'other' && (
                                                        <input
                                                            type="text"
                                                            placeholder="Skriv inn svaret ditt"
                                                            value={formData.otherFounder || ''}
                                                            onChange={(e) => updateFormData('otherFounder', e.target.value)}
                                                            className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                        />
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Merkevare */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-4">
                                        Har dere eksisterende retningslinjer for merkevaren? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="space-y-3">
                                        {[
                                            { value: 'comprehensive', label: 'Ja, omfattende retningslinjer for merkevarebygging' },
                                            { value: 'basic', label: 'Ja, men begrenset/grunnleggende' },
                                            { value: 'none', label: 'Nei, vi trenger merkedvareutvikling' },
                                            { value: 'unsure', label: 'Ikke sikker' },
                                        ].map((option, index) => {
                                            const isSelected = formData.brandingGuidelines === option.value;
                                            return (
                                                <label
                                                    key={option.value}
                                                    className={`flex items-center cursor-pointer border rounded-md px-3 py-2 transition-colors ${isSelected ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-gray-400'
                                                        }`}
                                                >
                                                    <span
                                                        className={`flex items-center justify-center w-6 h-6 text-sm font-bold rounded mr-3 border ${isSelected ? 'bg-orange-500 text-white border-orange-500' : 'text-orange-500 border-orange-500'
                                                            }`}
                                                    >
                                                        {String.fromCharCode(65 + index)}
                                                    </span>
                                                    <input
                                                        type="radio"
                                                        name="brandingGuidelines"
                                                        value={option.value}
                                                        checked={isSelected}
                                                        onChange={(e) => updateFormData('brandingGuidelines', e.target.value)}
                                                        className="hidden"
                                                    />
                                                    <span className="text-gray-700">{option.label}</span>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Budsjett */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-4">
                                        Hva er budsjettrammen din for denne oppstartsbedriften? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="space-y-3">
                                        {[
                                            { value: '2000-3000', label: '€2.000 - €3.000' },
                                            { value: '3000-4000', label: '€3.000 - €4.000' },
                                            { value: '4000+', label: '€4.000+' },
                                            { value: 'not-sure', label: 'Ikke sikker ennå' },
                                            { value: 'other', label: 'Annen' },
                                        ].map((option, index) => {
                                            const isSelected = formData.budget === option.value;
                                            return (
                                                <div key={option.value}>
                                                    <label
                                                        className={`flex items-center cursor-pointer border rounded-md px-3 py-2 transition-colors ${isSelected ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-gray-400'
                                                            }`}
                                                    >
                                                        <span
                                                            className={`flex items-center justify-center w-6 h-6 text-sm font-bold rounded mr-3 border ${isSelected ? 'bg-orange-500 text-white border-orange-500' : 'text-orange-500 border-orange-500'
                                                                }`}
                                                        >
                                                            {String.fromCharCode(65 + index)}
                                                        </span>
                                                        <input
                                                            type="radio"
                                                            name="budget"
                                                            value={option.value}
                                                            checked={isSelected}
                                                            onChange={(e) => updateFormData('budget', e.target.value)}
                                                            className="hidden"
                                                        />
                                                        <span className="text-gray-700">{option.label}</span>
                                                    </label>

                                                    {isSelected && option.value === 'other' && (
                                                        <input
                                                            type="text"
                                                            placeholder="Skriv inn svaret ditt"
                                                            value={formData.otherBudget || ''}
                                                            onChange={(e) => updateFormData('otherBudget', e.target.value)}
                                                            className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                        />
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Button */}
                                <button
                                    onClick={nextStep}
                                    disabled={!formData.founderStage || !formData.brandingGuidelines || !formData.budget}
                                    className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors"
                                >
                                    Søke
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    )}



                    {/* Step 3: Tilleggsinformasjon */}
                    {currentStep === 3 && (
                        <div>
                            <ScrollUp />
                            <h1 className="text-3xl font-bold text-gray-900 mb-8">Tilleggsinformasjon</h1>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Noe annet vi bør vite om prosjektet ditt?
                                    </label>
                                    {/* File Upload Section */}
                                    <div className="flex flex-col items-center w-full">
                                        {!formData.file ? (
                                            <label
                                                htmlFor="fileUpload"
                                                className="w-full max-w-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:border-orange-500 transition"
                                            >
                                                <svg
                                                    className="w-10 h-10 text-gray-500 mb-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 4v16m8-8H4"
                                                    />
                                                </svg>
                                                <p className="text-gray-700 font-medium">
                                                    Klikk eller dra for å laste opp
                                                </p>
                                                <p className="text-gray-500 text-sm">
                                                    PDF, DOCX eller TXT (maks 10MB)
                                                </p>
                                                <input
                                                    id="fileUpload"
                                                    type="file"
                                                    accept=".pdf,.docx,.txt"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        const files = e.target.files;
                                                        if (files && files.length > 0) {
                                                            setFormData({ ...formData, file: files[0] });
                                                        }
                                                    }}
                                                />
                                            </label>
                                        ) : (
                                            <div className="w-full max-w-2xl flex items-center justify-between mt-4 px-4 py-3 border rounded-lg bg-gray-50">
                                                <p className="text-gray-700 text-sm truncate">
                                                    <span className="font-semibold">Valgt fil:</span> {formData.file.name}
                                                </p>
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, file: null })}
                                                    className="text-red-500 hover:text-red-700 transition"
                                                    title="Fjern fil"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                </div>


                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Hvordan hørte du om oss? <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={formData.hearAboutUs}
                                        onChange={(e) => updateFormData('hearAboutUs', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white"
                                    >
                                        <option value=""></option>
                                        <option value="google">Google-søk</option>
                                        <option value="social-media">Sosiale medier</option>
                                        <option value="referral">Anbefaling</option>
                                        <option value="event">Arrangement/Event</option>
                                        <option value="other">Annet</option>
                                    </select>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={!formData.hearAboutUs}
                                    className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors"
                                >
                                    Send inn
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StartupApplicationForm;