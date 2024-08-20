import Image from 'next/image';
import { HydrateClient } from "~/trpc/server";
import Map from '../_components/atoms/map'

export default function ContactPage() {
  return (
    <HydrateClient>
        <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
            <Image
                src="/banner.jpg"
                alt="Banner"
                layout="responsive"
                width={1554}
                height={661} 
                style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: '87%',  
              left: '50%',
              transform: 'translate(-52%, -30%)', 
              width: '50%',
              height: '50%', 
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',  
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#000',  
            }}>
                <h1 style={{ fontSize: '4em', marginBottom: '10px' }}>¡Comunícate!</h1>
                <p style={{ fontSize: '1em', lineHeight: '1.5' }}>Escríbenos un mensaje o llámanos para resolver cualquier duda que tengas.</p>
            </div>
        </div>

        <section style={{
            display: 'flex',
            width: '100%',
            height: '500px',  // Puedes ajustar la altura según lo necesites
            marginTop: '20px',
        }}>
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f0f0', 

            }}>
                <h2 style={{ fontSize: '2em' }}>Mapa</h2>
                <Map />
            </div>
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e0e0e0',  
            }}>
                <h2 style={{ fontSize: '2em' }}>Forms</h2>
            </div>
        </section>
    </HydrateClient>
  );
}
