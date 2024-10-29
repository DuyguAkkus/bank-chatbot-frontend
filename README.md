# Banka Chatbot Projesi

Bu proje, kullanıcıların bankacılık ile ilgili sorularını yanıtlamak için bir chatbot uygulaması geliştirmeyi amaçlamaktadır. Uygulama, Python ve Flask ile geliştirilmiştir ve React kullanılarak bir ön yüz (frontend) tasarlanmıştır. Kullanıcılar, chatbot ile etkileşimde bulunarak sorularını sorabilir ve anlık yanıtlar alabilir.

![Chatbot Arayüzü](images/images.png)

## Proje Bileşenleri

1. **Backend**:

   - Python ile yazılmıştır.
   - Flask framework'ü kullanarak RESTful API oluşturur.
   - `flask_cors` modülü ile CORS (Cross-Origin Resource Sharing) destekler.
   - Kullanıcıdan gelen sorulara yanıt vermek için TF-IDF vektörizasyonu ve cosine similarity kullanır.

2. **Frontend**:
   - React kullanılarak geliştirilmiştir.
   - Kullanıcı arayüzü, mesaj gönderme ve alma işlevselliği sunar.
   - Axios kütüphanesi ile backend API'sine istek gönderir.

## Kurulum

### Backend

1. **Backend dizinine geçin**:

   ```bash
   cd backend
   ```
