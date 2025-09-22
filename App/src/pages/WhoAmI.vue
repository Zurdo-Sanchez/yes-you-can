<template>
    <div class="biography-page">
        <h1>¿Quién soy?</h1>
        <div class="bio-content">
            <img src="../assets/Xavi1.png" class="profile-img" />
            <div class="bio-text">
                <h2>Xavi Burgos</h2>
                <p>{{ t('profile.paraf.1') }}</p>
                <img src="../assets/Xavi-bruna-bb.png" class="other-img " />
                <p>{{ t('profile.paraf.2') }}</p>
                <img src="../assets/Xavi-bruna-joc.png" class="other-img " />
                <p>{{ t('profile.paraf.3') }}</p>
                <p>{{ t('profile.paraf.4') }}</p>
                <p>{{ t('profile.paraf.5') }}</p>
                <p>{{ t('profile.paraf.6') }}</p>
                <img src="../assets/Xavi-bruna-grande.png" class="other-img " />
                <p>{{ t('profile.paraf.7') }}</p>
                <ul>
                    <li><strong>{{ t('profile.ubicacion.title') }}:</strong> {{ t('profile.ubicacion.description') }}</li>
                    <li><strong>{{ t('profile.profesion.title') }}:</strong> {{ t('profile.profesion.description') }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
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
.other-img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 16px 0;
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