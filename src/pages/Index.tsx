import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const projects = [
  { id: 1, name: "Скандинавский стиль", area: "120 м²", price: "от 3.2 млн ₽", image: "https://cdn.poehali.dev/projects/78e3a58e-0cee-4e15-9c6c-c1134cd73bb6/files/44840fa9-38c2-42bd-a32e-c5155b60fd48.jpg", rooms: 3 },
  { id: 2, name: "Уютный дом", area: "95 м²", price: "от 2.5 млн ₽", image: "https://cdn.poehali.dev/projects/78e3a58e-0cee-4e15-9c6c-c1134cd73bb6/files/97c6740c-61c3-4528-8169-0e0cb68f8bb9.jpg", rooms: 2 },
  { id: 3, name: "Семейный коттедж", area: "180 м²", price: "от 4.8 млн ₽", image: "https://cdn.poehali.dev/projects/78e3a58e-0cee-4e15-9c6c-c1134cd73bb6/files/44840fa9-38c2-42bd-a32e-c5155b60fd48.jpg", rooms: 4 },
];

const readyHouses = [
  { id: 1, name: "Дом в лесу", location: "Московская обл.", price: "5.2 млн ₽", image: "https://cdn.poehali.dev/projects/78e3a58e-0cee-4e15-9c6c-c1134cd73bb6/files/44840fa9-38c2-42bd-a32e-c5155b60fd48.jpg", status: "Готов к заселению" },
  { id: 2, name: "Таунхаус Престиж", location: "Калужская обл.", price: "4.5 млн ₽", image: "https://cdn.poehali.dev/projects/78e3a58e-0cee-4e15-9c6c-c1134cd73bb6/files/97c6740c-61c3-4528-8169-0e0cb68f8bb9.jpg", status: "Сдан" },
];

const reviews = [
  { id: 1, name: "Александр М.", text: "Построили дом за 6 месяцев. Качество отличное, все по договору!", rating: 5 },
  { id: 2, name: "Ирина К.", text: "Профессиональная команда. Помогли с выбором участка и проекта.", rating: 5 },
  { id: 3, name: "Дмитрий П.", text: "Рекомендую! Цена-качество на высоте.", rating: 5 },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/111c47d7-9776-4bfa-b71e-3eb7161ef985.png" 
                alt="SK BRUS&FRAME" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-6">
              {["Проекты", "Готовые дома", "Участки", "О нас", "Отзывы", "Контакты"].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button size="lg" className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-accent/20 via-background to-secondary/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Строим с 2010 года</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Деревянные дома<br />вашей мечты
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Проектирование, строительство и готовые решения. Участки с бесплатным подключением коммуникаций.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection("проекты")} className="hover-scale">
                  <Icon name="Building2" size={20} className="mr-2" />
                  Смотреть проекты
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("контакты")}>
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Построенных домов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">14 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="bg-muted/50 rounded-2xl shadow-2xl w-full aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <Icon name="Video" className="text-primary mx-auto mb-4" size={64} />
                  <p className="text-lg text-muted-foreground font-medium">Место для видео с дрона</p>
                  <p className="text-sm text-muted-foreground mt-2">Добавьте ссылку на видео для размещения здесь</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-secondary" size={32} />
                  <div>
                    <div className="font-bold">Гарантия 10 лет</div>
                    <div className="text-sm text-muted-foreground">На все работы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="проекты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Каталог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Проекты домов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Типовые и индивидуальные проекты деревянных домов под ключ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover-scale group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary">{project.rooms} комнаты</Badge>
                </div>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Maximize2" size={16} />
                    {project.area}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{project.price}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="готовые-дома" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent">Акция</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Готовые дома</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Дома готовые к заселению со скидкой до 15%
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {readyHouses.map((house) => (
              <Card key={house.id} className="overflow-hidden hover-scale">
                <div className="grid md:grid-cols-2">
                  <img
                    src={house.image}
                    alt={house.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-6">
                    <Badge className="mb-3 bg-green-500">{house.status}</Badge>
                    <CardTitle className="mb-2">{house.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mb-4">
                      <Icon name="MapPin" size={16} />
                      {house.location}
                    </CardDescription>
                    <div className="text-3xl font-bold text-primary mb-6">{house.price}</div>
                    <Button className="w-full">
                      <Icon name="Eye" size={18} className="mr-2" />
                      Смотреть дом
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="участки" className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary">Бесплатные участки</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Участки для строительства</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предоставляем участки с коммуникациями при заказе строительства
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Преимущества наших участков</h3>
                <div className="space-y-4">
                  {[
                    { icon: "Zap", text: "Электричество подключено" },
                    { icon: "Droplet", text: "Центральный водопровод" },
                    { icon: "Wifi", text: "Оптоволокно до участка" },
                    { icon: "Trees", text: "Лесная зона, чистый воздух" },
                    { icon: "Car", text: "Асфальтированная дорога" },
                    { icon: "ShoppingBag", text: "Магазины и школа рядом" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Icon name={item.icon as any} className="text-secondary" size={20} />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-8" size="lg">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Смотреть на карте
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=36.156342,55.519516&z=14&l=map&pt=36.156342,55.519516,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-4xl font-bold mb-6">Строим дома с душой</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SK BRUS&FRAME — это команда профессионалов с 14-летним опытом в деревянном домостроении. 
                Мы используем только качественные материалы и современные технологии.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Каждый проект для нас особенный. Мы работаем под ключ: от проектирования до сдачи готового дома.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-xl">
                  <Icon name="Users" className="text-primary mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Специалистов в команде</div>
                </div>
                <div className="bg-secondary/5 p-6 rounded-xl">
                  <Icon name="Clock" className="text-secondary mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">6 мес</div>
                  <div className="text-sm text-muted-foreground">Средний срок строительства</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/78e3a58e-0cee-4e15-9c6c-c1134cd73bb6/files/97c6740c-61c3-4528-8169-0e0cb68f8bb9.jpg"
                alt="О компании"
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы владельцев домов от SK BRUS&FRAME
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Связь</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Ответим на все вопросы и поможем выбрать идеальный дом
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: "Phone", title: "Телефон", text: "+7 (495) 123-45-67" },
                { icon: "Mail", title: "Email", text: "info@skbrusframe.ru" },
                { icon: "MapPin", title: "Офис", text: "Москва, ул. Примерная, 1" },
              ].map((contact, idx) => (
                <Card key={idx} className="text-center hover-scale">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={contact.icon as any} className="text-primary" size={28} />
                    </div>
                    <div className="font-bold mb-2">{contact.title}</div>
                    <div className="text-sm text-muted-foreground">{contact.text}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-gradient-to-br from-primary to-secondary text-white">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4">Получите бесплатную консультацию</h3>
                  <p className="text-white/90 mb-8 text-lg">
                    Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="flex-1 px-6 py-3 rounded-lg text-foreground"
                    />
                    <Button size="lg" variant="secondary" className="hover-scale">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/111c47d7-9776-4bfa-b71e-3eb7161ef985.png" 
                alt="SK BRUS&FRAME" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-background/70 text-sm">
                Строительство деревянных домов под ключ с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                {["Проекты", "Готовые дома", "Участки", "О нас"].map((item, idx) => (
                  <div key={idx}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                      className="text-background/70 hover:text-accent transition-colors"
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-background/70">
                <div>+7 (495) 123-45-67</div>
                <div>info@skbrusframe.ru</div>
                <div>Москва, ул. Примерная, 1</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                {["MessageCircle", "Instagram", "Youtube"].map((icon, idx) => (
                  <button
                    key={idx}
                    className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent transition-colors flex items-center justify-center"
                  >
                    <Icon name={icon as any} size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            © 2024 SK BRUS&FRAME. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
