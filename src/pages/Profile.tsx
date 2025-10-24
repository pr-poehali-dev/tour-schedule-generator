import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const navigate = useNavigate();
  const [user] = useState({
    name: 'Александр Иванов',
    email: 'alex@email.com',
    avatar: 'АИ'
  });

  const savedRoutes = [
    {
      id: 1,
      title: 'Культурное путешествие по Санкт-Петербургу',
      image: 'https://cdn.poehali.dev/projects/f5d927b5-3501-41b3-8881-b95476cf2be0/files/e02b2fa4-57e7-4d0c-a1e4-bdc772f7d1a7.jpg',
      duration: '5 дней',
      date: '15 июня 2025',
      cost: '32 000 ₽',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Горные вершины Алтая',
      image: 'https://cdn.poehali.dev/projects/f5d927b5-3501-41b3-8881-b95476cf2be0/files/7fbcf6be-287e-4f38-b5d6-bcf3ff19bbd8.jpg',
      duration: '7 дней',
      date: '1 августа 2025',
      cost: '45 000 ₽',
      status: 'planned'
    },
    {
      id: 3,
      title: 'Пляжи Черноморского побережья',
      image: 'https://cdn.poehali.dev/projects/f5d927b5-3501-41b3-8881-b95476cf2be0/files/3973e362-5196-4f78-b895-4157d97ef490.jpg',
      duration: '10 дней',
      date: '10 июля 2024',
      cost: '55 000 ₽',
      status: 'completed'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge className="bg-blue-500">Скоро</Badge>;
      case 'planned':
        return <Badge variant="outline">Запланировано</Badge>;
      case 'completed':
        return <Badge variant="secondary">Завершено</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center cursor-pointer" onClick={() => navigate('/')}>
              <Icon name="MapPin" size={24} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">AI Travel Route Planner</span>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/')}>
              Главная
            </Button>
            <Button variant="ghost" onClick={() => navigate('/login')} className="gap-2">
              <Icon name="LogOut" size={18} />
              Выйти
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20 text-2xl">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                      {user.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h1>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Icon name="Mail" size={16} />
                      {user.email}
                    </p>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Icon name="Settings" size={18} />
                    Настройки
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="routes" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="routes" className="gap-2">
                <Icon name="Map" size={18} />
                Мои маршруты
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-2">
                <Icon name="User" size={18} />
                Профиль
              </TabsTrigger>
            </TabsList>

            <TabsContent value="routes" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Сохранённые маршруты</h2>
                  <p className="text-gray-600">Всего маршрутов: {savedRoutes.length}</p>
                </div>
                <Button className="gap-2" onClick={() => navigate('/')}>
                  <Icon name="Plus" size={18} />
                  Создать новый маршрут
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedRoutes.map((route) => (
                  <Card key={route.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={route.image}
                        alt={route.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        {getStatusBadge(route.status)}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 text-white">
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Calendar" size={16} />
                          {route.date}
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{route.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {route.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Wallet" size={14} />
                          {route.cost}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 gap-1"
                          onClick={() => navigate(`/route/${route.id}`)}
                        >
                          <Icon name="Eye" size={16} />
                          Посмотреть
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Icon name="Share2" size={16} />
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Настройки профиля</CardTitle>
                  <CardDescription>Обновите информацию о вашем аккаунте</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="profile-name">Имя</Label>
                    <Input id="profile-name" defaultValue={user.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-email">Email</Label>
                    <Input id="profile-email" type="email" defaultValue={user.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-city">Город проживания</Label>
                    <Input id="profile-city" placeholder="Москва" />
                  </div>
                  <Button className="gap-2">
                    <Icon name="Save" size={18} />
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Изменить пароль</CardTitle>
                  <CardDescription>Обновите пароль для большей безопасности</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Текущий пароль</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Новый пароль</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Подтвердите новый пароль</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button className="gap-2">
                    <Icon name="Lock" size={18} />
                    Обновить пароль
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">Опасная зона</CardTitle>
                  <CardDescription>Необратимые действия с аккаунтом</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="destructive" className="gap-2">
                    <Icon name="Trash2" size={18} />
                    Удалить аккаунт
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
