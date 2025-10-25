import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('route-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const upcomingEvents = [
    {
      image: 'https://cdn.poehali.dev/projects/f5d927b5-3501-41b3-8881-b95476cf2be0/files/7fbcf6be-287e-4f38-b5d6-bcf3ff19bbd8.jpg',
      title: 'Фестиваль света в Москве',
      description: 'Грандиозное шоу проекций и инсталляций',
      date: '15 ноября',
      type: 'event'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f5d927b5-3501-41b3-8881-b95476cf2be0/files/e02b2fa4-57e7-4d0c-a1e4-bdc772f7d1a7.jpg',
      title: 'Новая выставка в Эрмитаже',
      description: 'Импрессионисты: частные коллекции Европы',
      date: 'С 20 октября',
      type: 'new'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f5d927b5-3501-41b3-8881-b95476cf2be0/files/3973e362-5196-4f78-b895-4157d97ef490.jpg',
      title: 'Открытие эко-тропы на Байкале',
      description: 'Уникальный маршрут через заповедные места',
      date: 'С 1 ноября',
      type: 'new'
    }
  ];


  const interests = [
    { id: 'culture', label: 'Культурный' },
    { id: 'active', label: 'Активный отдых' },
    { id: 'beach', label: 'Пляжный' },
    { id: 'gastro', label: 'Гастрономический' },
    { id: 'family', label: 'Семейный' },
    { id: 'romantic', label: 'Романтический' },
    { id: 'nature', label: 'Природа' },
    { id: 'adventure', label: 'Экстрим' },
    { id: 'wellness', label: 'Оздоровление' },
    { id: 'shopping', label: 'Шопинг' },
    { id: 'photo', label: 'Фотография' },
    { id: 'education', label: 'Образовательный' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Icon name="MapPin" size={24} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">AI Travel Route Planner</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how" className="text-gray-600 hover:text-blue-600 transition-colors">Как это работает</a>
            <a href="#routes" className="text-gray-600 hover:text-blue-600 transition-colors">Маршруты</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
            <Button variant="outline" className="gap-2" onClick={() => navigate('/login')}>
              <Icon name="User" size={18} />
              Войти
            </Button>
          </nav>
          <button className="md:hidden">
            <Icon name="Menu" size={24} className="text-gray-700" />
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Путешествуйте по-своему:<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ваш идеальный маршрут
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Персонализированные приключения, созданные нейросетью. Расскажите о своих мечтах, и мы спланируем их в реальность
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 gap-2 shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToForm}
            >
              <Icon name="Sparkles" size={24} />
              Начать планирование
            </Button>
          </div>
        </div>
      </section>

      <section id="how" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Как это работает?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'Settings', title: 'Выберите предпочтения', desc: 'Укажите направление, даты, бюджет и интересы' },
              { icon: 'Sparkles', title: 'Нейросеть генерирует', desc: 'AI подбирает оптимальный маршрут с учётом всех параметров' },
              { icon: 'Map', title: 'Наслаждайтесь путешествием', desc: 'Получите детальный план с картой, местами и рекомендациями' }
            ].map((step, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Предстоящие события и новинки</h2>
          <p className="text-gray-600 text-center mb-12">Новые достопримечательности и интересные события</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((item, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'event' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {item.type === 'event' ? 'Событие' : 'Новинка'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 text-sm mb-1">
                      <Icon name="Calendar" size={16} />
                      {item.date}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-1 w-full"
                    onClick={() => navigate('/route/1')}
                  >
                    Узнать больше
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {showForm && (
        <section id="route-form" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Создайте свой маршрут</h2>
              <p className="text-gray-600 text-center mb-12">Заполните параметры, и нейросеть подберёт идеальное путешествие</p>
              
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="region">Район маршрута</Label>
                      <div className="relative">
                        <Icon name="Map" size={18} className="absolute left-3 top-3 text-gray-400" />
                        <Input id="region" placeholder="Например: Золотое кольцо, Байкал, Крым" className="pl-10" />
                      </div>
                      <p className="text-xs text-gray-500">Укажите город, регион или туристический район</p>
                    </div>

                    <div className="space-y-2">
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full gap-2"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                      >
                        <Icon name={showAdvanced ? "ChevronUp" : "ChevronDown"} size={18} />
                        {showAdvanced ? 'Скрыть' : 'Указать'} начальную и конечную точки
                      </Button>
                    </div>

                    {showAdvanced && (
                      <div className="grid md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-2">
                          <Label htmlFor="from">Начальная точка (опционально)</Label>
                          <div className="relative">
                            <Icon name="MapPin" size={18} className="absolute left-3 top-3 text-gray-400" />
                            <Input id="from" placeholder="Москва" className="pl-10" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="to">Конечная точка (опционально)</Label>
                          <div className="relative">
                            <Icon name="Navigation" size={18} className="absolute left-3 top-3 text-gray-400" />
                            <Input id="to" placeholder="Санкт-Петербург" className="pl-10" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="start-date">Начало поездки</Label>
                        <Input id="start-date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="end-date">Конец поездки</Label>
                        <Input id="end-date" type="date" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="travelers">Количество человек *</Label>
                        <Input 
                          id="travelers" 
                          type="number" 
                          min="1" 
                          placeholder="1"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="days">Количество дней</Label>
                        <Input 
                          id="days" 
                          type="number" 
                          min="1" 
                          placeholder="Любое"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Бюджет (₽)</Label>
                        <Input 
                          id="budget" 
                          type="number" 
                          min="0" 
                          placeholder="Любой"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="transport">Предпочитаемый транспорт</Label>
                        <Select>
                          <SelectTrigger id="transport">
                            <SelectValue placeholder="Выберите" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Любой</SelectItem>
                            <SelectItem value="car">Автомобиль</SelectItem>
                            <SelectItem value="train">Поезд</SelectItem>
                            <SelectItem value="plane">Самолёт</SelectItem>
                            <SelectItem value="bus">Автобус</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pace">Темп путешествия</Label>
                        <Select>
                          <SelectTrigger id="pace">
                            <SelectValue placeholder="Выберите" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="relaxed">Спокойный</SelectItem>
                            <SelectItem value="moderate">Умеренный</SelectItem>
                            <SelectItem value="intense">Насыщенный</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accommodation">Тип размещения</Label>
                      <Select>
                        <SelectTrigger id="accommodation">
                          <SelectValue placeholder="Выберите" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Любое</SelectItem>
                          <SelectItem value="hotel">Отель</SelectItem>
                          <SelectItem value="hostel">Хостел</SelectItem>
                          <SelectItem value="apartment">Апартаменты</SelectItem>
                          <SelectItem value="camping">Кемпинг</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>Цель поездки</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {interests.map((interest) => (
                          <div key={interest.id} className="flex items-center space-x-2">
                            <Checkbox id={interest.id} />
                            <label
                              htmlFor={interest.id}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {interest.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="wishes">Дополнительные пожелания</Label>
                      <Textarea 
                        id="wishes" 
                        placeholder="Опишите ваши особые пожелания: любимые места, ограничения по здоровью, особые интересы и т.д."
                        className="min-h-[120px] resize-none"
                      />
                    </div>

                    <Button 
                      className="w-full py-6 text-lg gap-2" 
                      size="lg"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/route/1');
                      }}
                    >
                      <Icon name="Sparkles" size={24} />
                      Сгенерировать маршрут
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы к незабываемому приключению?</h2>
          <p className="text-xl mb-8 opacity-90">Создайте свой идеальный маршрут прямо сейчас</p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6 gap-2"
            onClick={scrollToForm}
          >
            <Icon name="Sparkles" size={24} />
            Создать маршрут
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <span className="text-white font-semibold">AI Travel Route Planner</span>
              </div>
              <p className="text-sm">Персонализированные маршруты для незабываемых путешествий</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#how" className="hover:text-white transition-colors">Как это работает</a></li>
                <li><a href="#routes" className="hover:text-white transition-colors">Маршруты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Подписка</h3>
              <p className="text-sm mb-3">Получайте лучшие предложения</p>
              <div className="flex gap-2">
                <Input placeholder="Email" className="bg-gray-800 border-gray-700" />
                <Button size="sm">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 AI Travel Route Planner. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;