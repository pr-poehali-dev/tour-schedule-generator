import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
          <Icon name="ArrowLeft" size={20} />
          На главную
        </Button>
      </div>

      <Card className="w-full max-w-md shadow-2xl animate-scale-in">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
            <Icon name="MapPin" size={32} className="text-white" />
          </div>
          <CardTitle className="text-2xl">Добро пожаловать!</CardTitle>
          <CardDescription>Войдите в свой аккаунт AI Travel Route Planner</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Icon name="Mail" size={18} className="absolute left-3 top-3 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <div className="relative">
                <Icon name="Lock" size={18} className="absolute left-3 top-3 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Запомнить меня
                </label>
              </div>
              <Button variant="link" className="px-0 text-sm" type="button">
                Забыли пароль?
              </Button>
            </div>

            <Button type="submit" className="w-full gap-2" size="lg">
              <Icon name="LogIn" size={20} />
              Войти
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">или продолжить с</span>
              </div>
            </div>

            <Button variant="outline" type="button" className="w-full gap-2">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              Войти через Яндекс Почту
            </Button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Нет аккаунта?{' '}
              <Button
                variant="link"
                className="px-0 font-semibold"
                type="button"
                onClick={() => navigate('/register')}
              >
                Зарегистрироваться
              </Button>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;