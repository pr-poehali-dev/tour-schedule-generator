import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const RouteResult = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const routeData = {
    title: 'Культурное путешествие по Санкт-Петербургу',
    description: 'Исследуйте культурную столицу России с посещением знаковых достопримечательностей, музеев и исторических мест',
    duration: '5 дней',
    totalCost: '32 000 ₽',
    distance: '45 км',
    center: [59.9343, 30.3351] as [number, number],
    days: [
      {
        id: 'day1',
        title: 'День 1: Исторический центр',
        date: '15 июня 2025',
        points: [
          {
            id: 1,
            name: 'Эрмитаж',
            type: 'Музей',
            time: '10:00 - 13:00',
            description: 'Один из крупнейших и наиболее значительных художественных и культурно-исторических музеев мира',
            position: [59.9398, 30.3146] as [number, number],
            image: 'https://cdn.poehali.dev/projects/f5d927b5-3501-41b3-8881-b95476cf2be0/files/e02b2fa4-57e7-4d0c-a1e4-bdc772f7d1a7.jpg',
            cost: '800 ₽'
          },
          {
            id: 2,
            name: 'Кафе "Зингер"',
            type: 'Кафе',
            time: '13:30 - 14:30',
            description: 'Знаменитое кафе в доме Зингера на Невском проспекте с панорамным видом',
            position: [59.9343, 30.3241] as [number, number],
            image: 'https://cdn.poehali.dev/projects/f5d927b5-3501-41b3-8881-b95476cf2be0/files/e02b2fa4-57e7-4d0c-a1e4-bdc772f7d1a7.jpg',
            cost: '1 200 ₽'
          },
          {
            id: 3,
            name: 'Исаакиевский собор',
            type: 'Достопримечательность',
            time: '15:00 - 17:00',
            description: 'Крупнейший православный храм Санкт-Петербурга с колоннадой',
            position: [59.9341, 30.3062] as [number, number],
            image: 'https://cdn.poehali.dev/projects/f5d927b5-3501-41b3-8881-b95476cf2be0/files/e02b2fa4-57e7-4d0c-a1e4-bdc772f7d1a7.jpg',
            cost: '500 ₽'
          }
        ]
      },
      {
        id: 'day2',
        title: 'День 2: Петергоф и фонтаны',
        date: '16 июня 2025',
        points: [
          {
            id: 4,
            name: 'Большой Петергофский дворец',
            type: 'Дворец',
            time: '10:00 - 14:00',
            description: 'Парадная резиденция российских императоров с каскадом фонтанов',
            position: [59.8847, 29.9089] as [number, number],
            image: 'https://cdn.poehali.dev/projects/f5d927b5-3501-41b3-8881-b95476cf2be0/files/e02b2fa4-57e7-4d0c-a1e4-bdc772f7d1a7.jpg',
            cost: '1 000 ₽'
          }
        ]
      },
      {
        id: 'day3',
        title: 'День 3: Царское Село',
        date: '17 июня 2025',
        points: [
          {
            id: 5,
            name: 'Екатерининский дворец',
            type: 'Дворец',
            time: '10:00 - 15:00',
            description: 'Роскошная императорская резиденция с Янтарной комнатой',
            position: [59.7158, 30.3956] as [number, number],
            image: 'https://cdn.poehali.dev/projects/f5d927b5-3501-41b3-8881-b95476cf2be0/files/e02b2fa4-57e7-4d0c-a1e4-bdc772f7d1a7.jpg',
            cost: '1 200 ₽'
          }
        ]
      }
    ]
  };

  const allPoints = routeData.days.flatMap(day => day.points);
  const polylinePositions = allPoints.map(point => point.position);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Музей': return 'Museum';
      case 'Кафе': return 'Coffee';
      case 'Достопримечательность': return 'Landmark';
      case 'Дворец': return 'Castle';
      default: return 'MapPin';
    }
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case 'Музей': return 'default';
      case 'Кафе': return 'secondary';
      case 'Достопримечательность': return 'outline';
      case 'Дворец': return 'default';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={24} />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">AI Travel Route Planner</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Share2" size={16} />
              Поделиться
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Download" size={16} />
              PDF
            </Button>
            <Button size="sm" className="gap-2">
              <Icon name="Bookmark" size={16} />
              Сохранить
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{routeData.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{routeData.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Icon name="Calendar" size={20} className="text-blue-600" />
                <span className="font-medium">{routeData.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Icon name="Wallet" size={20} className="text-green-600" />
                <span className="font-medium">{routeData.totalCost}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Icon name="Navigation" size={20} className="text-purple-600" />
                <span className="font-medium">{routeData.distance}</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Map" size={24} />
                    Интерактивная карта маршрута
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-96 relative">
                    <MapContainer
                      center={routeData.center}
                      zoom={12}
                      scrollWheelZoom={true}
                      className="h-full w-full rounded-b-lg"
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Polyline positions={polylinePositions} color="#3b82f6" weight={3} opacity={0.7} />
                      {allPoints.map((point) => (
                        <Marker key={point.id} position={point.position}>
                          <Popup>
                            <div className="p-2">
                              <h3 className="font-semibold text-sm mb-1">{point.name}</h3>
                              <p className="text-xs text-gray-600 mb-2">{point.type}</p>
                              <p className="text-xs">{point.time}</p>
                            </div>
                          </Popup>
                        </Marker>
                      ))}
                    </MapContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Похожие маршруты</CardTitle>
                  <CardDescription>Вам также может понравиться</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: 'Романтический Петербург', days: '3 дня', price: '25 000 ₽' },
                    { title: 'Архитектурное наследие', days: '4 дня', price: '28 000 ₽' }
                  ].map((route, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div>
                        <h4 className="font-medium text-sm">{route.title}</h4>
                        <p className="text-xs text-gray-500">{route.days} • {route.price}</p>
                      </div>
                      <Icon name="ChevronRight" size={20} className="text-gray-400" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" size={24} />
                    Детальный план по дням
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {routeData.days.map((day) => (
                      <AccordionItem key={day.id} value={day.id}>
                        <AccordionTrigger className="hover:no-underline" onClick={() => setSelectedDay(day.id)}>
                          <div className="flex flex-col items-start">
                            <span className="font-semibold text-left">{day.title}</span>
                            <span className="text-sm text-gray-500">{day.date}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-2">
                            {day.points.map((point, idx) => (
                              <div key={point.id} className="relative pl-6 pb-4 border-l-2 border-blue-200 last:border-l-0">
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white" />
                                <Card className="hover:shadow-md transition-shadow">
                                  <CardContent className="p-4">
                                    <div className="flex gap-3">
                                      <img 
                                        src={point.image} 
                                        alt={point.name}
                                        className="w-20 h-20 rounded-lg object-cover"
                                      />
                                      <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                          <div>
                                            <h4 className="font-semibold text-sm mb-1">{point.name}</h4>
                                            <Badge variant={getTypeBadgeVariant(point.type) as any} className="text-xs">
                                              {point.type}
                                            </Badge>
                                          </div>
                                          <span className="text-xs text-gray-500">{point.time}</span>
                                        </div>
                                        <p className="text-xs text-gray-600 mb-2">{point.description}</p>
                                        <div className="flex items-center justify-between">
                                          <span className="text-sm font-medium text-blue-600">{point.cost}</span>
                                          <div className="flex gap-1">
                                            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs gap-1">
                                              <Icon name="MapPin" size={14} />
                                              На карте
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs gap-1">
                                              <Icon name="ExternalLink" size={14} />
                                              Подробнее
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                                {idx < day.points.length - 1 && (
                                  <div className="flex items-center gap-2 my-2 ml-2 text-xs text-gray-500">
                                    <Icon name="TrendingUp" size={14} />
                                    <span>Пешком 15 мин • 1.2 км</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteResult;
