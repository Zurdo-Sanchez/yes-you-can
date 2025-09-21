<template>
    <div class="biography-page">
        <h1>¿Quién soy?</h1>
        <div class="bio-content">
            <!-- <img src="../assets/profile.jpg" alt="Foto de perfil" class="profile-img" /> -->
            <div class="bio-text">
                <h2>Juan Pérez</h2>
                <p>
                    Soy desarrollador web apasionado por la tecnología y el aprendizaje constante.
                    Me especializo en Vue.js y disfruto creando aplicaciones que ayudan a las personas.
                    En mi tiempo libre, me gusta leer, practicar deportes y colaborar en proyectos open source.
                </p>
                <ul>
                    <li><strong>Ubicación:</strong> Ciudad de México</li>
                    <li><strong>Profesión:</strong> Desarrollador Frontend</li>
                    <li><strong>Intereses:</strong> Programación, diseño, innovación</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
.biography-page {
    max-width: 700px;
    margin: 40px auto;
    padding: 24px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.bio-content {
    display: flex;
    align-items: flex-start;
    gap: 32px;
}
.profile-img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #4caf50;
}
.bio-text {
    flex: 1;
}
.bio-text h2 {
    margin-top: 0;
    margin-bottom: 12px;
    color: #333;
}
.bio-text p {
    margin-bottom: 16px;
    color: #555;
}
.bio-text ul {
    list-style: none;
    padding: 0;
}
.bio-text li {
    margin-bottom: 8px;
}
</style>