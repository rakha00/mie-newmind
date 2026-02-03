export interface CareerJob {
    id: string;
    position: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
    whatsapp: string;
}

export const CAREERS: CareerJob[] = [
    {
        id: 'crew-outlet',
        position: 'Crew Outlet',
        location: 'Banyuwangi',
        type: 'Full Time',
        description: 'Bertanggung jawab atas operasional harian outlet, melayani customer dengan ramah dan cekatan.',
        requirements: [
            'Usia maksimal 25 tahun',
            'Pendidkan minimal SMA/SMK',
            'Berpenampilan menarik',
            'Siap bekerja shift',
        ],
        whatsapp: '628123456HRD',
    },
    {
        id: 'kitchen-crew',
        position: 'Kitchen Crew',
        location: 'Cikampek',
        type: 'Full Time',
        description: 'Menyiapkan pesanan sesuai SOP, menjaga kebersihan dapur, dan memastikan kualitas makanan terjaga.',
        requirements: [
            'Minat di bidang F&B',
            'Cekatan dan bersih',
            'Bisa bekerja dalam tim',
        ],
        whatsapp: '628123456HRD',
    },
];
